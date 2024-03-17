import Link from "next/link";
import { Container, Grid, ImageTag, Section, Seo } from "@/components";
import { sanityClient } from "@/utils";
import { GetStaticPropsResult } from "next/types";
import groq from "groq";
import { format } from "date-fns";
import { PortableText } from "@portabletext/react";

async function fetchPage() {
  const page: any = await sanityClient.fetch(
    groq`*[_type == "home" && !(_id in path('drafts.**'))][0] {
            ...,
            featuredArticle -> {
              ...,
              author -> {
                ...,
                picture {
                  _type,
                  asset->{
                    _id,
                    url
                  }
                },
              },
              coverImage {
                _type,
                asset -> {
                  _id,
                  url
                }
              },
            },
            latestArticle [] -> {
              ...,
              author -> {
                ...,
                picture {
                  _type,
                  asset->{
                    _id,
                    url
                  }
                },
              },
              coverImage {
                _type,
                asset -> {
                  _id,
                  url
                }
              },
            }
          }
        `
  );

  return { page };
}

export default async function Page() {
  const pageData = await fetchPage();

  console.log(pageData);

  if (!pageData) return null;
  const { page } = pageData;
  const { body, featuredArticle, latestArticle } = page;
  const { title, minuteRead, date, coverImage, slug, excerpt } =
    featuredArticle;

  const renderBlog = () =>
    latestArticle &&
    latestArticle.map((article: any) => {
      const { _id, title, minuteRead, date, coverImage, slug } = article;

      return (
        <Link
          key={_id}
          href={`/article/${slug.current}`}
          className="block blog-item col-span-full sm:col-span-6 xl:col-span-4 bg-white text-black mb-6"
        >
          <div className="blog-item-image h-[400px] rounded-lg overflow-hidden">
            <ImageTag src={coverImage.asset.url} />
          </div>
          <h2 className="text-4xl lg:text-5xl mt-4">{title}</h2>
          <div className="flex items-center gap-2 text-xl mt-2">
            <p className="text-md">{format(date, "d MMMM yyyy")}</p>
            <div className="h-[5px] w-[5px] bg-white rounded-full" />
            <p className="text-md">{minuteRead} mins read</p>
          </div>
        </Link>
      );
    });

  return (
    <main>
      <Section className="pt-0">
        <Link href={`/article/${slug.current}`} className="block">
          <Container className="flex min-h-screen">
            <Grid withColumnGap={false}>
              <div className="col-span-12 sm:col-span-6 bg-[#D93101] left-side">
                <div className="flex items-center h-full">
                  <div className="m-auto h-[300px] lg:h-[500px] w-full lg:w-[500px] overflow-hidden">
                    <ImageTag src={coverImage.asset.url} />
                  </div>
                </div>
              </div>

              <div className="col-span-12 sm:col-span-6 bg-[#DD6044] right-side">
                <div className="flex h-full flex-col p-8">
                  <div className="mt-auto">
                    <div className="flex items-center gap-2 text-xl mt-2">
                      <p className="text-sm uppercase">Featured Article</p>
                      <div className="h-[5px] w-[5px] bg-black rounded-full" />
                      <p className="text-sm uppercase">
                        {minuteRead} mins read
                      </p>
                    </div>
                    <h2 className="text-4xl lg:text-7xl uppercase">{title}</h2>
                  </div>

                  <article className="mt-auto text-3xl">
                    <p>{excerpt}</p>
                  </article>
                </div>
              </div>
            </Grid>
          </Container>
        </Link>
      </Section>

      <Section>
        <Container>
          <Grid>{renderBlog()}</Grid>
        </Container>
      </Section>
    </main>
  );
}

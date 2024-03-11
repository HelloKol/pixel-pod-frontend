import Link from "next/link";
import { Container, Grid, ImageTag, Section, Seo } from "@/components";
import { sanityClient } from "@/utils";
import { GetStaticPropsResult } from "next/types";
import groq from "groq";
import { format } from "date-fns";
import { PortableText } from "@portabletext/react";

interface props {
  page: any;
}

export default function Page({ page }: props): JSX.Element | null {
  if (!page) return null;
  const { body, featuredArticle, latestArticle } = page;
  const { title, minuteRead, date, coverImage, slug } = featuredArticle;

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
    <>
      <Seo seo={""} />
      <main>
        <Section withPadding={false} className="pt-[180px]">
          <Container>
            <article className="text-5xl">
              <PortableText value={body} />
            </article>
          </Container>
        </Section>

        <Section>
          <Container>
            <Link
              href={`/article/${slug.current}`}
              className="block lg:py-14 lg:px-24 p-10 bg-[#191919] text-white rounded-lg hover:outline hover:outline-2 hover:outline-offset-2 outline-blue-500 transition-outline duration-0 hover:duration-300 ease-in-out"
            >
              <p>Featured Article</p>
              <div className="mt-5 lg:mt-10 relative lg:flex gap-44 justify-between">
                <div>
                  <h2 className="text-4xl lg:text-5xl">{title}</h2>
                  <div className="flex items-center gap-2 text-xl mt-2">
                    <p className="text-md">{format(date, "d MMMM yyyy")}</p>
                    <div className="h-[5px] w-[5px] bg-white rounded-full" />
                    <p className="text-md">{minuteRead} mins read</p>
                  </div>

                  <div className="flex absolute items-center bottom-0 gap-4 text-xl">
                    <span>Read full article</span>
                    <svg
                      className="w-6 h-6 text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M19 12H5m14 0-4 4m4-4-4-4"
                      />
                    </svg>
                  </div>
                </div>

                <div className="mt-10 h-[300px] lg:h-[500px] w-full lg:w-[500px] rounded-xl overflow-hidden">
                  <ImageTag src={coverImage.asset.url} />
                </div>
              </div>
            </Link>

            <div className="mt-14">
              <Grid>{renderBlog()}</Grid>
            </div>
          </Container>
        </Section>
      </main>
    </>
  );
}

export async function getStaticProps(): Promise<GetStaticPropsResult<props>> {
  try {
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

    if (!page)
      return {
        notFound: true,
      };

    return {
      props: {
        page,
      },
      revalidate: 30,
    };
  } catch (err) {
    return {
      notFound: true,
    };
  }
}

export const revalidate = 30;
import Link from "next/link";
import { format } from "date-fns";
// Components
import { Container, Grid, ImageTag, Section } from "@/components";
// Utils/Lib
import { sanityClient, generateMetaTags } from "@/utils";
// Services/Types
import { HOME_QUERY } from "@/services/queries";
import { IHome } from "@/types";
import { ResolvingMetadata } from "next";

export async function generateMetadata({}: {}, parent: ResolvingMetadata) {
  const home: IHome = await sanityClient.fetch(HOME_QUERY);
  const previousImages = (await parent)?.openGraph?.images ?? [];

  return generateMetaTags(home, previousImages);
}

async function fetchPage() {
  const home: IHome = await sanityClient.fetch(HOME_QUERY);

  return { home };
}

export default async function Page() {
  const page = await fetchPage();

  if (!page) return null;
  const { home } = page;
  const { featuredArticle, latestArticle } = home;
  const { title, minuteRead, coverImage, slug, excerpt } = featuredArticle;

  const renderBlog = () =>
    latestArticle &&
    latestArticle.map((article) => {
      const { _id, title, minuteRead, date, coverImage, slug } = article;

      return (
        <Link
          key={_id}
          href={`/article/${slug}`}
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
      <Section className="pt-0 pb-0 md:pt-0 md:pb-0">
        <Link href={`/article/${slug}`} className="block">
          <Container className="flex min-h-screen">
            <Grid
              withColumnGap={false}
              withRowGap={false}
              className="md:w-screen"
            >
              <div className="left-side col-span-12 md:col-span-6 bg-[#D93101]">
                <div className="flex items-center h-[75vh] md:h-full md:pr-6">
                  <div className="m-auto h-[350px] lg:h-[400px] xl:h-[450px] w-full max-w-[500px] lg:w-[500px] overflow-hidden">
                    <ImageTag src={coverImage.asset.url} />
                  </div>
                </div>
              </div>

              <div className="right-side col-span-12 md:col-span-6 bg-[#DD6044]">
                <div className="flex flex-col justify-center h-full py-4 md:py-0 md:pl-6 md:pb-6 relative">
                  <div className="flex items-center gap-2 text-xl mt-2">
                    <p className="text-sm uppercase font-semibold">
                      Featured Article
                    </p>
                    <div className="h-[5px] w-[5px] bg-black rounded-full" />
                    <p className="text-sm uppercase font-semibold">
                      {minuteRead} mins read
                    </p>
                  </div>
                  <h2 className="text-4xl md:text-6xl lg:text-7xl uppercase mt-2 break-all">
                    {title}
                  </h2>
                  <article className="font-light text-xl md:text-3xl pl-6 pt-2 md:absolute md:bottom-6">
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

export const revalidate = 30;
import Link from "next/link";
import { ResolvingMetadata } from "next";
import { format } from "date-fns";
// Components
import { Grid, Section, Container, ImageTag, Seo } from "@/components";
// Utils/Lib
import { sanityClient, generateMetaTags } from "@/utils";
// Services/Types
import { ARTICLE_INDEX_QUERY, ARTICLE_QUERY } from "@/services/queries";
import { IArticle, IArticleIndex } from "@/types";

export async function generateMetadata({}: {}, parent: ResolvingMetadata) {
  const articleIndex: IArticleIndex = await sanityClient.fetch(
    ARTICLE_INDEX_QUERY
  );
  const previousImages = (await parent)?.openGraph?.images ?? [];

  return generateMetaTags(articleIndex, previousImages);
}

async function fetchPage() {
  const articleIndex: IArticleIndex = await sanityClient.fetch(
    ARTICLE_INDEX_QUERY
  );
  const article: IArticle[] = await sanityClient.fetch(ARTICLE_QUERY);

  return { articleIndex, article };
}

export default async function Page() {
  const page = await fetchPage();

  if (!page) return null;
  const { articleIndex, article } = page;
  const { title } = articleIndex;

  const renderBlog = () =>
    article &&
    article.map((article) => {
      const { _id, title, date, coverImage, slug, author } = article;

      return (
        <Link
          key={_id}
          href={`/article/${slug}`}
          className="block group relative col-span-full sm:col-span-6 xl:col-span-6 bg-white text-white mb-6 rounded-larger overflow-hidden"
        >
          <div className="h-[600px]">
            <ImageTag src={coverImage.asset.url} />
          </div>

          <div className="absolute top-7 left-7">
            <p className="text-md py-1 px-4 w-fit backdrop-blur-md bg-black/50 mb-2 rounded-full text-center">
              {author.name}
            </p>
            <p className="text-md py-1 px-4 backdrop-blur-md bg-black/50 mb-2 rounded-full text-center">
              {format(date, "d MMMM yyyy")}
            </p>
          </div>

          <div className="absolute top-7 right-7 bg-white p-4 rounded-full rotate-45 group-hover:translate-x-4 group-hover:-translate-y-4 transition ease-out">
            <svg
              className="group-hover:w-8 group-hover:h-8 w-10 h-10 text-darkBlack"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 6v13m0-13 4 4m-4-4-4 4"
              />
            </svg>
          </div>

          <h2 className="bg-white pt-[25px] pl-[75px] text-black absolute -bottom-14 rounded-larger -left-14 text-4xl h-[200px] w-[500px]">
            {title}
          </h2>
        </Link>
      );
    });

  return (
    <main>
      <Section>
        <Container>
          <Grid>
            <h1 className="col-span-full text-7xl md:text-8xl xl:text-9xl mt-10 text-center mb-6 md:mb-20">
              {title}
            </h1>
            {renderBlog()}
          </Grid>
        </Container>
      </Section>
    </main>
  );
}

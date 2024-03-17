import Link from "next/link";
import { Metadata } from "next/types";
import groq from "groq";
import { format } from "date-fns";
import { Grid, Section, Container, ImageTag } from "@/components";
import { sanityClient } from "@/utils";

export const metadata: Metadata = {
  title: "React App..",
  description: "Web site created with Next.js.",
};

async function fetchPage() {
  const articleIndex: any = await sanityClient.fetch(
    groq`*[_type == "postIndex" && !(_id in path('drafts.**'))][0] {
      title
    }
    `
  );

  const article: any = await sanityClient.fetch(
    groq`*[_type == "post" && !(_id in path('drafts.**'))] {
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
        `
  );

  return { articleIndex, article };
}

export default async function Page() {
  const page = await fetchPage();

  if (!page) return null;
  const { articleIndex, article } = page;
  const { title } = articleIndex;

  const renderBlog = () => {
    return (
      article &&
      article.map((item: any) => {
        const { _id, title, excerpt, date, coverImage, slug, author } = item;
        const { picture } = author;

        return (
          <Link
            key={_id}
            href={`/article/${slug.current}`}
            className="col-span-full sm:col-span-6 md:col-span-6 lg:col-span-4 mb-6"
          >
            <div className="h-80 lg:h-96">
              <ImageTag src={coverImage.asset.url} />
            </div>

            <div className="mt-4 flex justify-between items-center relative">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full overflow-hidden">
                  <ImageTag src={picture.asset.url} />
                </div>
                {author.name}
              </div>

              <div className="flex items-center gap-2">
                <svg
                  className="w-8 h-8 text-gray-800"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill-rule="evenodd"
                    d="M2 12a10 10 0 1 1 20 0 10 10 0 0 1-20 0Zm11-4a1 1 0 1 0-2 0v4c0 .3.1.5.3.7l3 3a1 1 0 0 0 1.4-1.4L13 11.6V8Z"
                    clip-rule="evenodd"
                  />
                </svg>
                <p>{format(date, "d MMMM yyyy")}</p>
              </div>
            </div>

            <h2 className="text-4xl lg:text-5xl mt-4">{title}</h2>

            <article className="font-light text-xl mt-4">
              <p>{excerpt}</p>
            </article>
          </Link>
        );
      })
    );
  };

  return (
    <main>
      <Section>
        <Container>
          <Grid>
            <h1 className="col-span-full text-7xl md:text-8xl xl:text-9xl text-center mb-16 md:mb-24">
              {title}
            </h1>
            {renderBlog()}
          </Grid>
        </Container>
      </Section>
    </main>
  );
}

import { Metadata, ResolvingMetadata } from "next";
import {
  Grid,
  Section,
  Container,
  ImageTag,
  BreadCrumb,
  Toast,
  Seo,
  SocialShare,
} from "@/components";
// import { useState } from "react";
import { GetStaticPaths, GetStaticProps } from "next/types";
import { sanityClient } from "@/utils";
import groq from "groq";
import { format } from "date-fns";
import { PortableText } from "@portabletext/react";

export async function generateMetadata(
  {
    params,
    searchParams,
  }: {
    params: { slug: string };
    searchParams: URLSearchParams;
  },
  parent: ResolvingMetadata
) {
  const { slug } = params;

  const article = await sanityClient.fetch(
    groq`*[_type == "post" && slug.current == $slug && !(_id in path('drafts.**'))][0]{
      ...,
      coverImage {
        _type,
        asset -> {
          _id,
          url
        }
      },
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
      seoPage {
        ...,
        image {
          _type,
          asset -> {
            _id,
            url
          }
        },
      }
    }`,
    { slug }
  );

  const previousImages = (await parent)?.openGraph?.images ?? [];

  return {
    title: article.title,
    description: article.description,
    authors: {
      name: article.author.name,
    },
    openGraph: {
      images: [
        ...previousImages,
        {
          url: article.coverImage.asset.url,
        },
      ],
    },
  };
}

export async function generateStaticParams() {
  const articles = await sanityClient.fetch(
    groq`*[_type == "post" && !(_id in path('drafts.**'))]{slug}`
  );

  const paths = articles.map((article: any) => ({
    params: { slug: article.slug.current },
  }));

  return paths;
}

async function fetchPosts(slug: string) {
  const article = await sanityClient.fetch(
    groq`*[_type == "post" && slug.current == $slug && !(_id in path('drafts.**'))][0]{
      ...,
      coverImage {
        _type,
        asset -> {
          _id,
          url
        }
      },
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
      seoPage {
        ...,
        image {
          _type,
          asset -> {
            _id,
            url
          }
        },
      }
    }`,
    { slug }
  );

  return article;
}

export default async function Page({ params }: { params: { slug: string } }) {
  const { slug } = params;
  // const router = useRouter();
  // const [toasts, setToasts] = useState([]);
  const page = await fetchPosts(slug);

  if (!page) return null;
  const {
    title,
    excerpt,
    body,
    minuteRead,
    date,
    coverImage,
    author,
    seoPage,
  } = page;
  const { name, picture } = author;

  // const handleCopyClick = () => {
  //   navigator.clipboard.writeText(path);
  //   const newToast = `Link is copied`;
  //   // @ts-expect-error
  //   setToasts((prevToasts) => [...prevToasts, newToast]);
  // };

  // // @ts-expect-error
  // const removeToast = (indexToRemove) => {
  //   const updatedToasts = toasts.filter((_, index) => index !== indexToRemove);
  //   setToasts(updatedToasts);
  // };

  return (
    <>
      <main>
        <Section>
          <Container>
            <Grid>
              <div className="col-span-full">
                <BreadCrumb />
              </div>

              <h1 className="col-start-2 col-end-5 text-7xl mt-14">{title}</h1>

              <div className="mt-2 col-start-2 col-end-5 flex gap-4 items-center">
                <div className="w-14 h-14 rounded-full overflow-hidden">
                  <ImageTag src={picture.asset.url} />
                </div>

                <div>
                  <p>{name}</p>
                  <div className="flex items-center gap-2">
                    <p>{format(date, "d MMMM yyyy")}</p>
                    <div className="h-[5px] w-[5px] bg-black rounded-full" />
                    <p>{minuteRead} mins read</p>
                  </div>
                </div>
              </div>

              <div className="col-span-full mt-4 h-[700px] w-full">
                <ImageTag src={coverImage.asset.url} />
              </div>

              <div className="mt-4 items-center gap-2 justify-end flex col-start-2 col-end-12">
                {/* <button
                  className="flex items-center gap-2 border-black border-[1px] rounded-full px-4 py-2"
                  onClick={handleCopyClick}
                >
                  <svg
                    className="w-6 h-6 text-gray-800"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 8v3c0 .6-.4 1-1 1H5m11 4h2c.6 0 1-.4 1-1V5c0-.6-.4-1-1-1h-7a1 1 0 0 0-1 1v1m4 3v10c0 .6-.4 1-1 1H6a1 1 0 0 1-1-1v-7.1c0-.3 0-.5.2-.7l2.5-2.9c.2-.2.5-.3.8-.3H13c.6 0 1 .4 1 1Z"
                    />
                  </svg>
                  Copy link
                </button>

                <Toast toasts={toasts} removeToast={removeToast} /> */}

                <SocialShare seo={seoPage} />
              </div>

              <article className="text-2xl mt-4 col-start-4 col-end-10">
                <p>{excerpt}</p>
              </article>

              <article className="text-2xl mt-4 col-start-4 col-end-10">
                <PortableText value={body} />
              </article>
            </Grid>
          </Container>
        </Section>
      </main>
    </>
  );
}

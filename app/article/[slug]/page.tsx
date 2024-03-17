import { Metadata, ResolvingMetadata } from "next";
import {
  CopyLink,
  Grid,
  Section,
  Container,
  ImageTag,
  BreadCrumb,
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

  return (
    <main>
      <Section>
        <Container>
          <Grid>
            <div className="col-span-full">
              <BreadCrumb />
            </div>

            <h1 className="col-span-full md:col-start-2 md:col-end-13 text-4xl md:text-6xl lg:text-7xl mt-10 md:mt-14 uppercase">
              {title}
            </h1>

            <div className="mt-2 col-span-full md:col-start-2 md:col-end-13 flex gap-4 items-center">
              <div className="w-10 h-10 md:w-14 md:h-14 rounded-full overflow-hidden">
                <ImageTag src={picture.asset.url} />
              </div>
              <div className="text-sm uppercase font-semibold">
                <p>{name}</p>
                <div className="flex items-center gap-2">
                  <p>{format(date, "d MMMM yyyy")}</p>
                  <div className="h-[5px] w-[5px] bg-black rounded-full" />
                  <p>{minuteRead} mins read</p>
                </div>
              </div>
            </div>

            <div className="col-span-full mt-4 h-[400px] sm:h-[450px] md:h-[500px] lg:h-[700px] xl:h-[750px] w-full">
              <ImageTag src={coverImage.asset.url} />
            </div>

            <div className="mt-4 items-center gap-2 justify-end flex col-span-full">
              <CopyLink slug={slug} />
              <SocialShare seo={seoPage} />
            </div>

            <article className="text-xl mt-4 col-start-2 col-end-12 lg:col-start-4 lg:col-end-10">
              <p>{excerpt}</p>
            </article>

            <article className="text-xl mt-4 col-start-2 col-end-12 lg:col-start-4 lg:col-end-10">
              <PortableText value={body} />
            </article>
          </Grid>
        </Container>
      </Section>
    </main>
  );
}

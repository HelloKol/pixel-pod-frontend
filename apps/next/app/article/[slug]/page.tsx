export const revalidate = 30;
import { ResolvingMetadata } from 'next';
import groq from 'groq';
import { format } from 'date-fns';
// Components
import { CopyLink, Grid, Section, Container, ImageTag, SocialShare, Bodycopy } from '@/components';
// Utils/Lib
import { generateMetaTags, sanityClient } from '@/utils';
// Services/Types
import { ARTICLE_SHOW_QUERY } from '@/services/queries';
import { IArticle } from '@/types';

export async function generateMetadata(
  {
    params
  }: {
    params: { slug: string };
  },
  parent: ResolvingMetadata
) {
  const { slug } = params;
  const article: IArticle = await sanityClient.fetch(ARTICLE_SHOW_QUERY, {
    slug
  });
  const previousImages = (await parent)?.openGraph?.images ?? [];

  return generateMetaTags(article, previousImages);
}

export async function generateStaticParams() {
  const articles: IArticle[] = await sanityClient.fetch(
    groq`*[_type == "post" && !(_id in path('drafts.**'))]{
      "slug": slug.current
    }`
  );

  const paths = articles.map((article) => ({
    params: { slug: article.slug }
  }));

  return paths;
}

async function fetchPosts(slug: string) {
  const article: IArticle = await sanityClient.fetch(ARTICLE_SHOW_QUERY, {
    slug
  });

  return article;
}

export default async function Page({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const page = await fetchPosts(slug);

  if (!page) return null;
  const { title, excerpt, body, minuteRead, date, coverImage, author, seoPage } = page;
  const { name, picture } = author;

  return (
    <main>
      <Section>
        <Container>
          <Grid>
            <h1 className="col-span-full md:col-start-2 md:col-end-13 text-4xl md:text-6xl font-semibold mt-10 md:mt-14">
              {title}
            </h1>

            <div className="mt-2 col-span-full md:col-start-2 md:col-end-13 flex gap-4 items-center">
              <div className="w-10 h-10 md:w-14 md:h-14 rounded-full overflow-hidden">
                <ImageTag
                  src={picture.asset.url}
                  layout="fill"
                  objectFit="cover"
                  blurDataURL={picture?.asset?.metadata?.lqip}
                />
              </div>
              <div className="text-sm uppercase font-semibold">
                <p>{name}</p>
                <div className="flex items-center gap-2">
                  <p>{format(date, 'd MMMM yyyy')}</p>
                  <div className="h-[5px] w-[5px] bg-black rounded-full" />
                  <p>{minuteRead} mins read</p>
                </div>
              </div>
            </div>

            <div className="col-span-full mt-4 h-[400px] sm:h-[450px] md:h-[500px] lg:h-[700px] xl:h-[750px] w-full rounded-3xl overflow-hidden">
              <ImageTag
                src={coverImage.asset.url}
                layout="fill"
                objectFit="cover"
                quality={100}
                blurDataURL={coverImage?.asset?.metadata?.lqip}
              />
            </div>

            <div className="mt-4 items-center gap-2 justify-end flex col-span-full">
              <CopyLink slug={slug} />
              <SocialShare seoPage={seoPage} />
            </div>

            <article className="text-3xl mt-4 col-start-2 col-end-12 lg:col-start-3 lg:col-end-11">
              <p>{excerpt}</p>
            </article>

            {body && (
              <article className="col-start-2 col-end-12 lg:col-start-3 lg:col-end-11">
                <Bodycopy value={body} />
              </article>
            )}
          </Grid>
        </Container>
      </Section>
    </main>
  );
}

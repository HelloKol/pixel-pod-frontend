import Link from "next/link";
import { Container, Grid, Section, Seo } from "@/components";
import { sanityClient } from "@/utils";
import { GetStaticPropsResult } from "next/types";
import groq from "groq";

interface props {
  page: any;
}

export default function Page({ page }: props): JSX.Element | null {
  if (!page) return null;

  return (
    <>
      <Seo seo={""} />

      <main>
        <Section withPadding={false} className="pt-[350px] min-h-screen">
          <Container>
            <Grid
              className={`relative items-end after:content-[''] after:bg-black after:h-[390px] after:w-[1.5px] after:absolute after:top-1/2 after:transform after:-translate-y-1/2`}
            >
              <h1 className="text-7xl col-start-3 col-end-8">404 Not Found</h1>
              <p className="col-start-3 col-end-8">Looks like you're lost</p>

              <Link
                href="/"
                className="w-fit col-start-9 col-end-13 relative inline-flex items-center justify-start py-3 pl-0 pr-12 overflow-hidden font-semibold text-black transition-all duration-150 ease-in-out hover:pl-10 hover:pr-6 group"
              >
                <span className="absolute bottom-0 left-0 w-full h-[1.5px] transition-all duration-150 ease-in-out bg-black group-hover:h-full"></span>
                <span className="absolute right-0 pr-0 duration-200 ease-out group-hover:translate-x-12">
                  <svg
                    className="w-5 h-5 text-black"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </span>
                <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </span>
                <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">
                  Start over
                </span>
              </Link>
            </Grid>
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

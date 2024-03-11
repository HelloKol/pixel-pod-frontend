import { useRouter } from "next/router";
import {
  Grid,
  Section,
  Container,
  ImageTag,
  BreadCrumb,
  Toast,
  Seo,
} from "@/components";
import {
  FacebookShare,
  TwitterShare,
  LinkedinShare,
  EmailShare,
} from "react-share-kit";
import { useState } from "react";
import { GetStaticPaths, GetStaticProps } from "next/types";
import { sanityClient } from "@/utils";
import groq from "groq";
import { format } from "date-fns";
import { PortableText } from "@portabletext/react";

interface props {
  page: any;
}

export default function Page({ page }: props): JSX.Element | null {
  const router = useRouter();
  const [toasts, setToasts] = useState([]);

  if (!page) return null;
  const { title, excerpt, body, minuteRead, date, coverImage, author } = page;
  const { name, picture } = author;

  const path = process.env.NEXT_PUBLIC_BASE_URL + router.asPath;

  const handleCopyClick = () => {
    navigator.clipboard.writeText(path);
    const newToast = `Link is copied`;
    // @ts-expect-error
    setToasts((prevToasts) => [...prevToasts, newToast]);
  };

  // @ts-expect-error
  const removeToast = (indexToRemove) => {
    const updatedToasts = toasts.filter((_, index) => index !== indexToRemove);
    setToasts(updatedToasts);
  };

  return (
    <>
      <Seo seo={""} />

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
                <button
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

                <Toast toasts={toasts} removeToast={removeToast} />

                <div className="relative h-8 w-8 overflow-hidden">
                  <svg
                    fill="#000000"
                    className="h-8 w-8"
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="-143 145 512 512"
                  >
                    <path
                      d="M329,145h-432c-22.1,0-40,17.9-40,40v432c0,22.1,17.9,40,40,40h432c22.1,0,40-17.9,40-40V185C369,162.9,351.1,145,329,145z
	 M41.4,508.1H-8.5V348.4h49.9V508.1z M15.1,328.4h-0.4c-18.1,0-29.8-12.2-29.8-27.7c0-15.8,12.1-27.7,30.5-27.7
	c18.4,0,29.7,11.9,30.1,27.7C45.6,316.1,33.9,328.4,15.1,328.4z M241,508.1h-56.6v-82.6c0-21.6-8.8-36.4-28.3-36.4
	c-14.9,0-23.2,10-27,19.6c-1.4,3.4-1.2,8.2-1.2,13.1v86.3H71.8c0,0,0.7-146.4,0-159.7h56.1v25.1c3.3-11,21.2-26.6,49.8-26.6
	c35.5,0,63.3,23,63.3,72.4V508.1z"
                    />
                  </svg>

                  <span className="block absolute top-1 left-0 z-10 opacity-0 h-8 w-8 overflow-hidden">
                    <LinkedinShare
                      url={"https://github.com/ayda-tech/react-share-kit"}
                      borderRadius={10}
                      size={40}
                    />
                  </span>
                </div>

                <div className="relative h-[38px] w-[38px] overflow-hidden">
                  <svg
                    fill="#000000"
                    className="h-[38px] w-[38px] rounded-[13px]"
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M2 2H22V22H2V2ZM8 8H16C16.55 8 17 8.45 17 9V15C17 15.55 16.55 16 16 16H8C7.45 16 7 15.55 7 15L7.005 9C7.005 8.45 7.45 8 8 8ZM12 12.5L8.00001 9.99997V15H16V9.99997L12 12.5ZM12 11.5L8.00001 9.00001H16L12 11.5Z"
                      fill="#000000"
                    />
                  </svg>

                  <span className="block absolute top-1 left-1 opacity-0 z-10 h-[38px] w-[38px] overflow-hidden">
                    <EmailShare
                      url={"https://github.com/next-share"}
                      subject={"Next Share"}
                      body="body"
                      borderRadius={10}
                      size={40}
                    />
                  </span>
                </div>

                <div className="relative h-8 w-8 overflow-hidden">
                  <svg
                    fill="#000000"
                    className="h-8 w-8"
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="-143 145 512 512"
                  >
                    <path
                      d="M329,145h-432c-22.1,0-40,17.9-40,40v432c0,22.1,17.9,40,40,40h432c22.1,0,40-17.9,40-40V185C369,162.9,351.1,145,329,145z
	 M169.5,357.6l-2.9,38.3h-39.3v133H77.7v-133H51.2v-38.3h26.5v-25.7c0-11.3,0.3-28.8,8.5-39.7c8.7-11.5,20.6-19.3,41.1-19.3
	c33.4,0,47.4,4.8,47.4,4.8l-6.6,39.2c0,0-11-3.2-21.3-3.2c-10.3,0-19.5,3.7-19.5,14v29.9H169.5z"
                    />
                  </svg>

                  <span className="block absolute top-1 left-0 opacity-0 z-10 h-8 w-8 overflow-hidden">
                    <FacebookShare
                      url={"https://github.com/ayda-tech/react-share-kit"}
                      quote={
                        "react-share-kit - social share buttons for next & react apps."
                      }
                      hashtag={"#react-share-kit"}
                      borderRadius={10}
                      size={40}
                    />
                  </span>
                </div>

                <div className="relative h-8 w-8 overflow-hidden">
                  <TwitterShare
                    url={path}
                    title={title}
                    hashtags={["#react-share-kit", "#front-end"]}
                    borderRadius={4}
                    size={32}
                  />
                </div>
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

export const getStaticPaths: GetStaticPaths = async () => {
  const articles = await sanityClient.fetch(
    groq`*[_type == "post" && !(_id in path('drafts.**'))]{slug}`
  );

  const paths = articles.map((article: any) => ({
    params: { slug: article.slug.current },
  }));

  console.log(paths);

  return {
    paths,
    fallback: false, // Set to true if you want to use Incremental Static Regeneration
  };
};

export const getStaticProps: GetStaticProps = async ({ params }: any) => {
  const { slug } = params;
  const page = await sanityClient.fetch(
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
    }`,
    { slug }
  );

  return {
    props: {
      page,
    },
  };
};

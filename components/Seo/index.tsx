"use client";
import Head from "next/head";
import { useRouter } from "next/router";
import settings from "../../data/settings.json";

interface Props {
  seo: any;
}

const Seo = ({ seo }: Props) => {
  return null;
  const router = useRouter();
  const {
    title,
    siteName,
    siteNamePosition,
    description,
    keywords,
    image,
    canonicalUrl,
  } = settings.seoSettings;
  const path = process.env.NEXT_PUBLIC_BASE_URL + router.asPath;

  return (
    <Head>
      <title>
        {siteNamePosition === "after"
          ? `${seo?.title || title} | ${siteName}`
          : `${siteName} | ${seo?.title || title}`}
      </title>

      {/* Basic Meta Tags */}
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      {/* Description and Keywords Meta Tags */}
      <meta name="description" content={seo?.description || description} />
      <meta name="keywords" content={seo?.keywords || keywords} />

      {/* Canonical Link Tag */}
      <link rel="canonical" href={path} />

      {/* Site Open Graph Tags */}
      <meta content="en_GB" property="og:locale" />
      <meta content="en" name="language" />
      <meta content="website" property="og:type" />
      <meta content={siteName} property="og:site_name" />
      <meta content={siteName} name="site_name" />

      {/* Content Open Graph Tags */}
      <meta property="og:title" content={seo?.title || title} />
      <meta
        property="og:description"
        content={seo?.description || description}
      />
      <meta
        property="og:image"
        content={seo?.image?.asset?.url || image?.asset?.url}
      />
      <meta property="og:url" content={path} />

      {/*<!-- Google / Search Engine Tags -->*/}
      <meta property="name" content={seo?.title || title} />
      <meta property="description" content={seo?.description || description} />
      <meta
        property="image"
        content={seo?.image?.asset?.url || image?.asset?.url}
      />

      {/*<!-- Twitter Meta Tags -->*/}
      <meta name="twitter:title" content={seo?.title || title} />
      <meta
        name="twitter:description"
        content={seo?.description || description}
      />
      <meta
        name="twitter:image"
        content={seo?.image?.asset?.url || image?.asset?.url}
      />
      <meta name="twitter:card" content="summary_large_image" />

      {/* Article-specific Tags */}
      <meta property="article:published_time" content="2024-03-10T12:00:00Z" />
      <meta property="article:modified_time" content="2024-03-10T14:30:00Z" />
      <meta property="article:author" content="John Doe" />

      {/* Favicon */}
      <link rel="icon" type="image/x-icon" href="/static/favicon.ico" />
      <link rel="shortcut icon" type="image/png" href="/static/favicon.png" />
      <link rel="shortcut icon" type="image/ico" href="/static/favicon.ico" />

      {/* Apple Touch Icons */}
      <link
        rel="apple-touch-icon"
        sizes="57x57"
        href="/apple-touch-icon-57x57.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="72x72"
        href="/apple-touch-icon-72x72.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="76x76"
        href="/apple-touch-icon-76x76.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="114x114"
        href="/apple-touch-icon-114x114.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="120x120"
        href="/apple-touch-icon-120x120.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="144x144"
        href="/apple-touch-icon-144x144.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="152x152"
        href="/apple-touch-icon-152x152.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon-180x180.png"
      />
      {/* Default Size */}
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
    </Head>
  );
};

export default Seo;

import settings from "../data/settings.json";

const generateMetaTags = (metaData: any, previousImages: any) => {
  const { seoPage } = metaData;
  const { seoSettings } = settings;

  const metaTags = {
    title:
      seoSettings.siteNamePosition === "after"
        ? `${seoPage.title} | ${seoSettings.siteName}`
        : `${seoSettings.siteName} | ${seoPage.title}`,
    keywords: seoPage.keywords?.split(","),
    authors: [{ name: metaData?.author?.name || "" }],
    creator: metaData?.author?.name || "",
    publisher: metaData?.author?.name || "",
    alternates: {
      canonical: "/",
      languages: {
        en_GB: "/en_GB",
      },
    },

    openGraph: {
      title: seoPage.title,
      description: seoPage.description,
      url: process.env.NEXT_PUBLIC_BASE_URL,
      siteName: seoSettings.siteName,
      images: [
        ...previousImages,
        {
          url: seoPage.image.asset.url,
        },
      ],
      locale: "en_GB",
      type: "website",
    },

    twitter: {
      card: "summary_large_image",
      title: seoPage.title,
      description: seoPage.description,
      creator: process.env.NEXT_PUBLIC_TWITTER_HANDLE,
      images: [
        ...previousImages,
        {
          url: seoPage.image.asset.url,
        },
      ],
    },

    robots: {
      index: true,
      follow: true,
      nocache: true,
      googleBot: {
        index: true,
        follow: false,
        noimageindex: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };

  return metaTags;
};

export default generateMetaTags;

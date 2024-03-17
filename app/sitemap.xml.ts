import { NextApiRequest, NextApiResponse } from "next";

function generateSiteMap() {
  return `<?xml version="1.0" encoding="UTF-8"?>
    <sitemapindex xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/siteindex.xsd"
    xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
    >
      <sitemap>
        <loc>${process.env.NEXT_PUBLIC_BASE_URL}/sitemap/home.xml</loc>
        <loc>${process.env.NEXT_PUBLIC_BASE_URL}/sitemap/article-index.xml</loc>
        <loc>${process.env.NEXT_PUBLIC_BASE_URL}/sitemap/article-show.xml</loc>
      </sitemap>
    </sitemapindex>
  `;
}

export async function getStaticProps() {
  // We generate the XML sitemap with the records data
  const sitemap = generateSiteMap();

  return {
    props: {
      sitemap,
    },
  };
}

function Sitemap({ sitemap }: { sitemap: string }) {
  return sitemap;
}

export default Sitemap;

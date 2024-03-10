import { NextApiResponse } from "next";

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

function SiteMap() {}

export async function getServerSideProps({ res }: { res: NextApiResponse }) {
  // We generate the XML sitemap with the records data
  const sitemap = generateSiteMap();

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default SiteMap;

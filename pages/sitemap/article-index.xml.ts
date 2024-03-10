import { NextApiResponse } from "next";
import sanityClient from "../../utils/sanity";

function generateSiteMap(
  paths: { _updatedAt: string; dynamicRoute: string; slug: string }[]
) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset 
    xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" 
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xmlns:xhtml="http://www.w3.org/1999/xhtml" 
    xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd"
    xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0" 
    xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" 
    xmlns:video="http://www.google.com/schemas/sitemap-video/1.1"
   >
      ${
        paths &&
        paths
          .map(
            ({
              _updatedAt,
              dynamicRoute,
              slug,
            }: {
              _updatedAt: string;
              dynamicRoute: string;
              slug: string;
            }) => {
              return `
                <url>
                  <loc>${`${process.env.NEXT_PUBLIC_BASE_URL}${
                    dynamicRoute ? `/${dynamicRoute}` : ""
                  }${slug ? `/${slug}` : ""}`}</loc>
                  <changefreq>weekly</changefreq> 
                  <priority>0.5</priority>
                  ${_updatedAt ? `<lastmod>${_updatedAt}</lastmod>` : ``}
                </url>
            `;
            }
          )
          .join("")
      }
   </urlset>
 `;
}

function SiteMap({
  paths,
}: {
  paths: { _updatedAt: string; dynamicRoute: string; slug: string }[];
}) {
  const sitemap = generateSiteMap(paths);
  return sitemap;
}

export async function getServerSideProps({ res }: { res: NextApiResponse }) {
  const records = await sanityClient.fetch(
    `*[_type == "postIndex" && !(_id in path('drafts.**'))]{
      _updatedAt,
      dynamicRoute,
      slug
    }`
  );

  const pathJson = JSON.parse(JSON.stringify(records));
  // We generate the XML sitemap with the records data
  const sitemap = generateSiteMap(pathJson);

  res.setHeader("Content-Type", "text/xml");
  // we send the XML to the browser
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default SiteMap;

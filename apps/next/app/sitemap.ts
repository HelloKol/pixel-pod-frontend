// Utils/Lib
import { sanityClient } from "@/utils";
// Services/Types
import {
  ARTICLE_INDEX_QUERY,
  ARTICLE_QUERY,
  HOME_QUERY,
} from "@/services/queries";
import { IArticle, IArticleIndex, IHome } from "@/types";

const fetchHome = async () => {
  const data: IHome = await sanityClient.fetch(HOME_QUERY);
  return data;
};

const fetchArticleIndex = async () => {
  const articleIndex: IArticleIndex = await sanityClient.fetch(
    ARTICLE_INDEX_QUERY
  );
  return articleIndex;
};

async function fetchArticle() {
  const article: IArticle[] = await sanityClient.fetch(ARTICLE_QUERY);
  return article;
}

export default async function sitemap() {
  const home = await fetchHome();
  const articleIndex = await fetchArticleIndex();
  const article = await fetchArticle();

  const homeSitemap = [
    {
      url: process.env.NEXT_PUBLIC_BASE_URL,
      lastModified: home._updatedAt,
      changeFrequency: "weekly",
      priority: 0.5,
    },
  ];

  const articleIndexSitemap = [
    {
      url: process.env.NEXT_PUBLIC_BASE_URL + `/${articleIndex.slug}`,
      lastModified: articleIndex._updatedAt,
      changeFrequency: "weekly",
      priority: 0.5,
    },
  ];

  const articleSitemap = article.map((item) => {
    const { dynamicRoute, slug, _updatedAt } = item;
    return {
      url: process.env.NEXT_PUBLIC_BASE_URL + `/${dynamicRoute}/${slug}`,
      lastModified: _updatedAt,
      changeFrequency: "weekly",
      priority: 0.5,
    };
  });

  return [...homeSitemap, ...articleIndexSitemap, ...articleSitemap];
}

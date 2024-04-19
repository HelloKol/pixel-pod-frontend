import groq from "groq";
import { AUTHOR_IMAGE, MAIN_IMAGE, SEO_PAGE } from "./common";

export const ARTICLE = `
  title,
  excerpt,
  body,
  minuteRead,
  date,
  title,
  dynamicRoute,
  "slug": slug.current,
  ${MAIN_IMAGE},
  author -> {
    name,
    ${AUTHOR_IMAGE}
  },
  ${SEO_PAGE}
`;

const HOME_QUERY = groq`*[_type == "home" && !(_id in path('drafts.**'))][0] {
  _updatedAt,
  title,
  featuredArticle -> {
      ${ARTICLE}
    },
    latestArticle [] -> {
      ${ARTICLE}
    },
    seoPage {
      _type,
      description,
      keywords,
      tags,
      title,
      image {
        _type,
        asset -> {
          _id,
          url
        }
      },
    }
  }
`;

export default HOME_QUERY;

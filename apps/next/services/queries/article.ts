import groq from "groq";
import { AUTHOR_IMAGE, MAIN_IMAGE, SEO_PAGE } from "./common";

export const ARTICLE = `
  _updatedAt,
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

const ARTICLE_QUERY = groq`*[_type == "post" && !(_id in path('drafts.**'))][0...100] {
  ${ARTICLE},
}
`;

export default ARTICLE_QUERY;

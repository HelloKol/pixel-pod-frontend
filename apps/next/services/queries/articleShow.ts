import groq from "groq";
import { AUTHOR_IMAGE, MAIN_IMAGE, SEO_PAGE } from "./common";

const ARTICLE_SHOW_QUERY = groq`*[_type == "post" && slug.current == $slug && !(_id in path('drafts.**'))][0]{
  _updatedAt,
  title,
  excerpt,
  body,
  minuteRead,
  date,
  ${MAIN_IMAGE},
  author -> {
    name,
    ${AUTHOR_IMAGE}
  },
  ${SEO_PAGE}
}`;

export default ARTICLE_SHOW_QUERY;

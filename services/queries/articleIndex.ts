import groq from "groq";
import { SEO_PAGE } from "./common";

const ARTICLE_INDEX_QUERY = groq`*[_type == "postIndex" && !(_id in path('drafts.**'))][0] {
  _updatedAt,
  title,
  slug,
  ${SEO_PAGE}
}
`;

export default ARTICLE_INDEX_QUERY;

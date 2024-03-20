import groq from "groq";
import { SEO } from "@/services/queries";

const ARTICLE_INDEX_QUERY = groq`*[_type == "postIndex" && !(_id in path('drafts.**'))][0] {
  _updatedAt,
  title,
  slug,
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

export default ARTICLE_INDEX_QUERY;

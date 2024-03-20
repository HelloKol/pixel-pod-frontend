import groq from "groq";
import { SEO } from "@/services/queries";

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
  coverImage {
    _type,
    asset -> {
      _id,
      url
    }
  },
  author -> {
    name,
    picture {
      _type,
      asset->{
        _id,
        "url": url + "?w=200&h=200" ,
      }
    },
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
`;

const ARTICLE_QUERY = groq`*[_type == "post" && !(_id in path('drafts.**'))][0...100] {
  ${ARTICLE},
}
`;

export default ARTICLE_QUERY;

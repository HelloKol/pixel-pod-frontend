import groq from "groq";
import { SEO } from "@/services/queries";

export const ARTICLE = `
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

const HOME_QUERY = groq`*[_type == "home" && !(_id in path('drafts.**'))][0] {
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

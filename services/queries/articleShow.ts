import groq from "groq";
import { SEO } from "@/services/queries";

const ARTICLE_SHOW_QUERY = groq`*[_type == "post" && slug.current == $slug && !(_id in path('drafts.**'))][0]{
  title,
  excerpt,
  body,
  minuteRead,
  date,
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
}`;

export default ARTICLE_SHOW_QUERY;

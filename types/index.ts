import { PortableTextBlock } from "@portabletext/types";

export interface IHome {
  featuredArticle: IArticle;
  latestArticle: IArticle[];
  seoPage: ISeo;
}

export interface IAuthor {
  picture: IMedia;
  name: string;
}

export interface IArticleIndex {
  title: string;
  seoPage: ISeo;
}

export interface IArticle {
  _id: string;
  title: string;
  excerpt: string;
  body: PortableTextBlock;
  date: string;
  minuteRead: number;
  author: IAuthor;
  coverImage: IMedia;
  slug: string;
  seoPage: ISeo;
}

export interface IMedia {
  _type: string;
  asset: {
    url: string;
  };
}

export interface ISeo {
  _type: string;
  description: string;
  image: IMedia;
  keywords: string;
  tags?: string;
  title: string;
}

const SEO = `
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

export default SEO;

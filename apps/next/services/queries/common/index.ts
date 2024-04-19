export const MAIN_IMAGE = `
    coverImage {
        _type,
        alt,
        caption,
        asset-> {
            _id,
            url,
            metadata {
                lqip
            }
        }
    }
`;

export const AUTHOR_IMAGE = `
    picture {
        _type,
        alt,
        caption,
        asset-> {
            _id,
            "url": url + "?w=200&h=200" ,
            metadata {
                lqip
            }
        }
    }
`;

export const SEO_PAGE = `
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
                url,
                metadata {
                    lqip
                }
            }
        },
    }
`;

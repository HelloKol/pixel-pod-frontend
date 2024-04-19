const client = require("../utils/sanity");

const fs = require("fs");

const createDirectory = async () =>
  fs.promises.mkdir("./data", { recursive: true });

const fetchSiteSettings = async () => {
  const data = await client.fetch(`
    *[_type == 'settings'][0] {
      ...,
      headerNavigation[] {
        _key,
        _type,
        title,
        content-> {
          title,
          dynamicRoute,
          slug
        },
      },
      seoSettings {
        ...,
        image {
          _type,
          asset -> {
            _id,
            url
          }
        },
      }
    }
  `);

  fs.writeFileSync("./data/settings.json", JSON.stringify(data));
};

(async () => {
  await Promise.all([createDirectory(), fetchSiteSettings()]);
})();

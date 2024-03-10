/** @type {import('next').NextConfig} */

const withTM = require("next-transpile-modules")(["react-share-kit"]);

module.exports = withTM({
  reactStrictMode: true,
  images: {
    domains: ["cdn.sanity.io", "source.unsplash.com"],
  },
});

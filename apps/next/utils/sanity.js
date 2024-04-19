const sanityClient = require("@sanity/client");

module.exports = sanityClient.createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_STUDIO_ID || "chj9vsgl",
  dataset: process.env.NEXT_PUBLIC_SANITY_STUDIO_DATASET || "production",
  apiVersion: "2022-11-15",
  useCdn: true,
});

const { SitemapStream, streamToPromise } = require("sitemap");
const { createWriteStream } = require("fs");
const path = require("path");

// Base URL of your site
const BASE_URL = "https://warriorwhocodes.com";

// List your routes here
const routes = [
  { url: "/", changefreq: "weekly", priority: 1.0 },
  { url: "/projects", changefreq: "weekly", priority: 0.9 },
  { url: "/experience", changefreq: "weekly", priority: 0.8 },
  { url: "/testimonials", changefreq: "monthly", priority: 0.8 },
  { url: "/about", changefreq: "monthly", priority: 0.8 },
  { url: "/contact", changefreq: "monthly", priority: 0.8 },
];

async function generateSitemap() {
  const sitemapPath = path.resolve(__dirname, "public", "sitemap.xml");
  const sitemapStream = new SitemapStream({ hostname: BASE_URL });
  const writeStream = createWriteStream(sitemapPath);

  sitemapStream.pipe(writeStream);

  routes.forEach((route) => sitemapStream.write(route));
  sitemapStream.end();

  await streamToPromise(sitemapStream);
  console.log("✅ sitemap.xml generated at public/sitemap.xml");
}

generateSitemap().catch((err) => console.error(err));

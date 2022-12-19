export const sitemap = "";
import fs from "fs";
import glob from "glob";
import { format } from "date-fns";
import { globals } from "./globals";
import { getStaticPaths as getBlogPaths } from "../pages/kb/[blog]";

export const generateSitemap = async () => {
  const pagesDir = "src/pages/**/*.*";
  const posts = await glob.sync(pagesDir);

  const pagePaths = posts
    .filter((path) => !path.includes("["))
    .filter((path) => !path.includes(".module.css"))
    .filter((path) => !path.includes(".tsx"))
    .filter((path) => !path.includes("/_"))
    .map((path) => path.slice(1));

  const blogPaths = await getBlogPaths().paths;
  const today = format(new Date(), "yyyy-LL-dd");

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
  <url>
      <loc>${globals.url}</loc>
      <lastmod>${today}</lastmod>
  </url>
${[...pagePaths, ...blogPaths]
  .map((path) => {
    const item = [`<url>`];
    item.push(`  <loc>${globals.url}${path}</loc>`);
    item.push(`  <lastmod>${today}</lastmod>`);
    item.push(`</url>`);
    return item.join("");
  })
  .join("")}
</urlset>`;

  // writes sitemap.xml to public directory
  const path = `${process.cwd()}/public/sitemap.xml`;
  fs.writeFileSync(path, sitemap, "utf8");
  console.log(`generated sitemap.xml`);

  return sitemap;
};

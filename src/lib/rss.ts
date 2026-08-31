import RSS from "rss";
import fs from "fs";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import rehypeRaw from "rehype-raw";
import rehypeStringify from "rehype-stringify";
import { globals } from "../lib/globals";
import type { PostData } from "../lib/loader";

/**
 * Markdown -> HTML for feed item descriptions.
 *
 * Replaces `showdown`, which had unfixable ReDoS and XSS advisories and no
 * upstream patch. This reuses the same remark/rehype stack the site renders
 * with (see components/Markdown.tsx), so feed output matches the pages:
 * remark-gfm for the pipe tables and rehype-raw for the literal HTML the docs
 * are authored with. Both `allowDangerousHtml` flags are what let that raw HTML
 * survive the mdast -> hast -> string trip; the input is our own content.
 */
const markdownToHtml = unified()
  .use(remarkParse)
  .use(remarkGfm)
  .use(remarkRehype, { allowDangerousHtml: true })
  .use(rehypeRaw)
  .use(rehypeStringify, { allowDangerousHtml: true });

export const generateRSS = async (posts: PostData[]) => {
  posts.map((post) => {
    if (!post.canonicalUrl)
      throw new Error(
        "Missing canonicalUrl. A canonical URL is required for RSS feed generation. If you don't care about RSS, uncomment `generateRSS(posts)` at the bottom of index.tsx."
      );
    return post;
  });

  const feed = new RSS({
    title: globals.siteName,
    description: globals.siteDescription,
    feed_url: `${globals.url}/rss.xml`,
    site_url: globals.url,
    image_url: `${globals.url}/favicon.png`,
    managingEditor: globals.email,
    webMaster: globals.email,
    copyright: `${new Date().getFullYear()} ${globals.yourName}`,
    language: "en",
    pubDate: globals.siteCreationDate,
    ttl: 60,
  });

  let isValid = true;
  for (const post of posts) {
    const html = String(await markdownToHtml.process(post.content));
    if (!post.datePublished) {
      isValid = false;
      console.warn(
        "All posts must have a publishedDate timestamp when generating RSS feed."
      );
      console.warn("Not generating rss.xml.");
    }
    feed.item({
      title: post.title,
      description: html,
      url: `${globals.url}/${post.path}`,
      categories: post.tags || [],
      author: post.author || "anonymous",
      date: new Date(post.datePublished || 0).toISOString(),
    });
  }

  if (!isValid) return;

  // writes RSS.xml to public directory
  const path = `${process.cwd()}/public/rss.xml`;
  fs.writeFileSync(path, feed.xml(), "utf8");
  console.log(`generated RSS feed`);
};

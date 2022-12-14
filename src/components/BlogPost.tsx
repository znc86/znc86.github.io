import React from "react";
import Link from 'next/link';
import { Author } from "../components/Author";
import { PostMeta } from "../components/PostMeta";
import { Markdown } from "../components/Markdown";
import DisplayDate from "../components/DisplayDate";
import styles from "./BlogPost.module.css";
import type { PostData } from "../lib/loader";

export const BlogPost: React.FunctionComponent<{ post: PostData }> = ({
  post,
}) => {
  const { title, subtitle } = post;
  return (
    <article className="hentry h-entry">
      <PostMeta post={post} />

      <header className={styles.header}>
        <h1 className="entry-title p-name">{title}</h1>

        {subtitle && <h2 className={styles.subtitle}>{subtitle}</h2>}

        <div className={styles.byline}>
          <DisplayDate datetime={post.datePublished} />
          <br />
          <Author post={post} />
        </div>
      </header>

      <div className="entry-content e-content">
        <Markdown source={post.content} />
      </div>
      <footer>
        <aside>
          <h3>Tags</h3>

          {post.tags && (
            <ul>
              {post.tags.map(tag => (
                <li key={tag}>
                  <Link href={`/kb/tags/${tag}`} locale="en-US">{tag}</Link>
                </li>
              ))}
            </ul>
          )}
        </aside>
      </footer>
    </article>
  );
};

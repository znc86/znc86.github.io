import React from "react";
import { Author } from "../components/Author";
import { PostMeta } from "../components/PostMeta";
import { Markdown } from "../components/Markdown";
import DisplayDate from "../components/DisplayDate";

import type { PostData } from "../lib/loader";

export const BlogPost: React.FunctionComponent<{ post: PostData }> = ({
  post,
}) => {
  const { title, subtitle } = post;
  return (
    <div>
      <PostMeta post={post} />
      <div>
        {title && <h1>{title}</h1>}
        {subtitle && <h2>{subtitle}</h2>}
        <br />
        <Author post={post} />
        <DisplayDate datetime={post.datePublished} />
      </div>

      <div>
        <Markdown source={post.content} />
      </div>
    </div>
  );
};

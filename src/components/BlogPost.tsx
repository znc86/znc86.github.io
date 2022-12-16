import React from "react";
import { Author } from "src/components/Author";
import { PostMeta } from "src/components/PostMeta";
import { Markdown } from "src/components/Markdown";
import type { PostData } from "src/lib/loader";

export const BlogPost: React.FunctionComponent<{ post: PostData }> = ({
  post,
}) => {
  const { title, subtitle } = post;
  return (
    <div>
      <PostMeta post={post} />
      {post.bannerPhoto && <img src={post.bannerPhoto} alt=" " />}
      <div>
        {title && <h1>{title}</h1>}
        {subtitle && <h2>{subtitle}</h2>}
        <br />
        <Author post={post} />
      </div>

      <div>
        <Markdown source={post.content} />
      </div>
    </div>
  );
};

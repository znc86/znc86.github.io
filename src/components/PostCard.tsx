import React from "react";
import Link from "next/link";
import type { PostData } from "../lib/loader";

export const PostCard: React.FC<{ post: PostData }> = (props) => {
  const post = props.post;
  return (
    <div>
      <Link href={`/${post.path}`}>{post.title && <h2>{post.title}</h2>}</Link>
      {post.subtitle && <p>{post.subtitle}</p>}
    </div>
  );
};

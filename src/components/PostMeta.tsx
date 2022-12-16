import React from "react";
import type { PostData } from "../lib/loader";
import { Meta } from "../components/Meta";

export const PostMeta: React.FC<{ post: PostData }> = ({ post }) => {
  return (
    <Meta
      meta={{
        title: post.title,
        desc: post.description,
        link: post.canonicalUrl,
        image: post.bannerPhoto,
      }}
    />
  );
};

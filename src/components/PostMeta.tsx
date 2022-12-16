import React from "react";
import { PostData } from "src/lib/loader";
import { Meta } from "src/components/Meta";

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

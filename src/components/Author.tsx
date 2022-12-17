import React from "react";
import { type PostData } from "../lib/loader";

export const Author: React.FC<{ post: PostData }> = (props) => {
  return (
    <span>
      {props.post.authorPhoto && (
        <img src={props.post.authorPhoto} className="author-image" />
      )}
      <AuthorLines post={props.post} />
    </span>
  );
};

export const AuthorLines: React.FC<{ post: PostData }> = (props) => {
  return (
    <span className="author-line">
      {props.post.author && <span>{props.post.author}</span>}
    </span>
  );
};

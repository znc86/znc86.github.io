import React from 'react';
import Page from '../../../../src/components/page';
import { PostCard } from "../../../components/PostCard";
import { loadBlogPosts } from '../../../lib/loader';
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import styles from './[tag].module.css';
import type { GetStaticProps, GetStaticPropsResult} from 'next'
import type { PostData } from '../../../lib/loader';


export const getStaticPaths = async () => {
  // const tags = ['a', 'b', 'c'];
  const posts = await loadBlogPosts();
  const uniqueTags = new Set<string>();
  posts.forEach(post => post.tags?.forEach(tag => uniqueTags.add(tag)));

  const tags = Array.from(uniqueTags);
  console.log(tags.join(', '));
  const paths = tags.map((tag: string) => ({
    params: {
      tag,
    },
  }))

  return {
    paths,
    fallback: false,
  }
}

interface TagPageProps {
  tag: string;
  posts: Array<PostData>;
}

export const getStaticProps: GetStaticProps = async ({ locale, params }): Promise<GetStaticPropsResult<TagPageProps>> => {
  const posts = await loadBlogPosts();
  const tagPosts = posts.filter(post => post.tags?.includes(params?.tag as string));
  return {
    props: {
      ...(await serverSideTranslations(locale as string)),
      tag: params?.tag as string,
      posts: tagPosts,
    },
  };
}



export default function TagPage(props: TagPageProps) {
  return (
    <Page>
      <h1>{props.tag}</h1>

      {props.posts.length > 0 && (
        <ul className={styles.list}>
          {props.posts.map((post: PostData, j: number) => (
            <li key={j}><PostCard post={post} /></li>)
          )}
        </ul>
      )}
    </Page>
  );
}

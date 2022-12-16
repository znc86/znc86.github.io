import React from "react";
import glob from "glob";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Page from "src/components/page";
import { BlogPost } from "src/components/BlogPost";
import { loadPost } from "src/lib/loader";

type HomeProps = {
  locale: string;
  params: any;
};

function Post(props: any) {
  const { post } = props;
  return (
    <Page>
      <BlogPost post={post} />
    </Page>
  );
}

export const getStaticPaths = () => {
  const blogs = glob.sync("./docs/kb/*.md");
  const slugs = blogs.map((file: string) => {
    const popped = file.split("/").pop();
    if (!popped) throw new Error(`Invalid blog path: ${file}`);
    return popped.slice(0, -3).trim();
  });

  const paths = slugs.map((slug) => `/kb/${slug}`);
  return { paths, fallback: false };
};

export async function getStaticProps({ locale, params }: HomeProps) {
  const post = await loadPost(`kb/${params.blog}.md`);
  return {
    props: {
      ...(await serverSideTranslations(locale)),
      post,
    },
  };
}

export default Post;

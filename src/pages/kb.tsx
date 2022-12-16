import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import Page from "../components/page";
import { PostCard } from "../components/PostCard";
import { loadBlogPosts } from "../lib/loader";
import type { PostData } from "../lib/loader";
import type { NextPage } from "next";

type HomeProps = {
  locale: string;
};
export async function getStaticProps({ locale }: HomeProps) {
  const posts = await loadBlogPosts();

  return {
    props: {
      ...(await serverSideTranslations(locale)),
      posts,
    },
  };
}

const Kb: NextPage = (props: any) => {
  const { t } = useTranslation("common");

  return (
    <>
      <Head>
        <title>Knowledge Base - ZNC86.club</title>
      </Head>
      <Page>
        {props.posts.map((post: any, j: any) => {
          return <PostCard post={post} key={j} />;
        })}
      </Page>
    </>
  );
};

export default Kb;

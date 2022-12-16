import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import Page from "src/components/page";
import { PostCard } from "src/components/PostCard";
import { loadBlogPosts } from "src/lib/loader";
import type { PostData } from "src/lib/loader";
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

const Kb: NextPage = (props: { posts: PostData[] }) => {
  const { t } = useTranslation("common");

  return (
    <>
      <Head>
        <title>Knowledge Base - ZNC86.club</title>
      </Head>
      <Page>
        {props.posts.map((post, j) => {
          return <PostCard post={post} key={j} />;
        })}
      </Page>
    </>
  );
};

export default Kb;

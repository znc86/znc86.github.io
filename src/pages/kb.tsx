import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import Page from "../components/page";
import { PostCard } from "../components/PostCard";
import { loadBlogPosts } from "../lib/loader";
import type { NextPage } from "next";
import styles from "./kb.module.css";

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
        <title>{t("pages.kb.page title")}</title>
      </Head>
      <Page>
        <h1>{t("pages.kb.title")}</h1>
        <ol className={styles.list}>
          {props.posts.map((post: any, j: any) => {
            return (
              <li key={j}>
                <PostCard post={post} />
              </li>
            );
          })}
        </ol>
      </Page>
    </>
  );
};

export default Kb;

import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import Page from "../components/page";
import { PostCard } from "../components/PostCard";
import { loadBlogPosts } from "../lib/loader";
import styles from "./kb.module.css";
import type { PostData } from "../lib/loader";

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

interface KbProps {
  posts: PostData[];
}
export default function Kb({ posts }: KbProps) {
  const { t } = useTranslation("common");

  return (
    <>
      <Head>
        <title>{t("pages.kb.page title")}</title>
        <meta property="og:title" content={t("pages.kb.page title") || ""} />
        <meta name="description" content={t("pages.kb.kb subtitle") || ""} />
        <meta name="og:description" content={t("pages.kb.kb subtitle") || ""} />
        <meta property="og:url" content="https://znc86.club/kb" />
        <meta property="og:image" content="https://znc86.club/icon.png" />
        <meta property="og:image:width" content="1260" />
        <meta property="og:image:height" content="1260" />
      </Head>
      <Page>
        <h1>{t("pages.kb.title")}</h1>
        <p>{t("pages.kb.kb subtitle")}</p>
        <ol className={styles.list}>
          {posts.map((post: PostData, j: number) => {
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
}

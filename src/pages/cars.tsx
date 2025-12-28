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
  const posts = await loadBlogPosts("cars/*.md");

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
        <title>{t("pages.cars.page title")}</title>
        <meta property="og:title" content={t("pages.cars.page title") || ""} />
        <meta
          name="description"
          content={t("pages.cars.cars subtitle") || ""}
        />
        <meta
          name="og:description"
          content={t("pages.cars.cars subtitle") || ""}
        />
        <meta property="og:url" content="https://type-ra.org/cars" />
        <meta property="og:image" content="https://type-ra.org/icon.png" />
        <meta property="og:image:width" content="1260" />
        <meta property="og:image:height" content="1260" />
      </Head>
      <Page>
        <h1>{t("pages.cars.title")}</h1>
        <p>{t("pages.cars.cars subtitle")}</p>
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

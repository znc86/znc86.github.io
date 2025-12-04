import { type NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import Page from "../components/page";
import { generateRSS } from "../lib/rss";
import { generateSitemap } from "../lib/sitemap";
import { loadBlogPosts } from "../lib/loader";
import styles from "./index.module.css";

type HomeProps = {
  locale: string;
};
export async function getStaticProps({ locale }: HomeProps) {
  const posts = await loadBlogPosts();
  await generateRSS(posts); // comment out to disable RSS generation
  await generateSitemap(); // comment out to disable sitemap generation

  return {
    props: {
      ...(await serverSideTranslations(locale)),
    },
  };
}

const Home: NextPage = () => {
  const { t } = useTranslation("common");

  return (
    <>
      <Head>
        <title>
          Type-RA.org - motorsports garage for the ZN6, ZC6, ZN8, ZD8 chassis
        </title>

        <meta property="og:title" content={t("pages.index.title") || ""} />
        <meta name="description" content={t("pages.index.copy1") || ""} />
        <meta name="og:description" content={t("pages.index.copy1") || ""} />
        <meta property="og:url" content="https://type-ra.org/" />
        <meta property="og:image" content="https://type-ra.org/icon.png" />
        <meta property="og:image:width" content="1260" />
        <meta property="og:image:height" content="1260" />
      </Head>
      <Page>
        <h2>{t("pages.index.title")}</h2>

        <div className={styles.layout}>
          <div className={styles.one}>
            <p>{t("pages.index.copy1")}</p>

            <p>
              {t("pages.index.we drive the")}
              {t("pages.index.chassis")}
            </p>

            <Image
              src="/icon.png"
              alt="Type RA logo"
              width="328"
              height="328"
            />
          </div>
          <ul className={`${styles.two} ${styles.links}`}>
            <li>
              <Link href="/conduct" title="Code of Conduct">
                ⚖️ {t("pages.index.code of conduct")}
              </Link>
              <br />
              {t("pages.index.code subtitle")}
            </li>
            <li>
              <Link href="/kb" title={t("pages.index.kb") || ""}>
                🧑‍💻 {t("pages.index.kb")}
              </Link>
              <br />
              {t("pages.index.kb subtitle")}
            </li>
            <li>
              <Link href="/events" title={t("pages.events.title") || ""}>
                🏁 {t("pages.events.title")}
              </Link>
              <br />
              {t("pages.events.subtitle")}
            </li>
            <li>
              <a
                className={styles.instagram}
                href="https://instagram.com/tra_typera"
                rel="external"
              >
                {t("pages.index.instagram")}
              </a>
              <br />
              {t("pages.index.instagram subtitle")}
            </li>
          </ul>
        </div>
      </Page>
    </>
  );
};

export default Home;

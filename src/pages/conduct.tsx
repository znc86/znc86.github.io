import { type NextPage } from "next";
import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import Page from "../components/page";

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale)),
      // Will be passed to the page component as props
    },
  };
}

const Home: NextPage = () => {
  const { t } = useTranslation("common");

  return (
    <>
      <Head>
        <title>{t("pages.conduct.title")}</title>

        <meta property="og:title" content={t("pages.conduct.title") || ""} />
        <meta
          name="description"
          content={t("pages.conduct.display title") || ""}
        />
        <meta property="og:url" content="/conduct" />
      </Head>
      <Page>
        <h1>{t("pages.conduct.display title")}</h1>
        <p>{t("pages.conduct.last updated")}</p>

        <p>
          <strong>TL;DR</strong> {t("pages.conduct.make friends")}
        </p>

        <p>
          <strong>{t("pages.conduct.diversity")}</strong>{" "}
          {t("pages.conduct.inclusive")}
        </p>

        <p>{t("pages.conduct.applies")}</p>

        <h2>{t("pages.conduct.subtitle")}</h2>

        <ol>
          <li>{t("pages.conduct.one")}</li>
          <li>{t("pages.conduct.two")}</li>
          <li>{t("pages.conduct.three")}</li>
          <li>{t("pages.conduct.four")}</li>
          <li>{t("pages.conduct.five")}</li>
          <li>{t("pages.conduct.six")}</li>
          <li>{t("pages.conduct.seven")}</li>
        </ol>
      </Page>
    </>
  );
};

export default Home;

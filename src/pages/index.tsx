import { type NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import Page from "../components/page";
import styles from "./index.module.css";

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
        <title>
          ZNC86.club - motorsports support team for the Z N/C 8/6 chassis
        </title>

        <meta property="og:site_name" content="ZNC86" />
        <meta
          property="og:title"
          content="ZNC86 motorsports support team for the Z N/C 8/6 chassis"
        />
        <meta
          name="description"
          content="ZNC86 motorsports support team for the Z N/C 8/6 chassis"
        />
        <meta property="og:url" content="https://znc86.club/" />
        <meta property="og:image" content="https://znc86.club/icon.png" />
        <meta property="og:image:width" content="1260" />
        <meta property="og:image:height" content="1260" />
      </Head>
      <Page>
        <div className={styles.page}>
          <h1>{t("site.name")}</h1>

          <h2>{t("pages.index.title")}</h2>

          <div className={styles.layout}>
            <div className={styles.one}>
              <p>{t("pages.index.copy1")}</p>

              <p>
                We drive the
                <ruby>
                  <ruby>
                    Z<rp>(</rp>
                    <rt>ZN6</rt>
                    <rp>)</rp> N/C<rp>(</rp>
                    <rt>ZN8</rt>
                    <rp>)</rp> 8/6<rp>(</rp>
                    <rt>ZC8 ZC6</rt>
                    <rp>)</rp>
                  </ruby>
                  <rp> </rp>
                </ruby>
                chassis of many names: Scion FR-S, Toyota 86, Toyota GR86,
                Subaru BRZ.
              </p>

              <Image
                src="/icon.png"
                alt="pixel art of a car"
                width="320"
                height="320"
              />
            </div>
            <ul className={`${styles.two} ${styles.links}`}>
              <li>
                <a href="conduct.html" title="Code of Conduct">
                  ⚖️ {t("pages.index.code of conduct")}
                </a>
                <br />
                {t("pages.index.code subtitle")}
              </li>
              <li>
                <a
                  className={styles.discord}
                  href="https://forms.gle/4wmUwEzHdQjkgezo7"
                  title="Join the Discord chat"
                >
                  {t("pages.index.join")}
                </a>
                <br />
                {t("pages.index.join subtitle")}
              </li>
              <li>
                <a
                  className={styles.instagram}
                  href="https://instagram.com/znc86.club"
                  rel="external"
                >
                  {t("pages.index.instagram")}
                </a>
                <br />
                {t("pages.index.instagram subtitle")}
              </li>
            </ul>
          </div>
        </div>
      </Page>
    </>
  );
};

export default Home;

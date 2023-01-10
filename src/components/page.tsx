import Head from "next/head";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import styles from "./page.module.css";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { t } = useTranslation("common");
  const { locale, asPath } = useRouter();

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/png" href="/favicon.png" sizes="64x64" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <link rel="home" href="/" />
        <meta property="og:site_name" content="ZNC86" />
        <link
          type="application/atom+xml"
          rel="alternate"
          href="/rss.xml"
          title="ZNC86"
        />
        <link
          rel="sitemap"
          type="application/xml"
          href="/sitemap.xml"
          title="sitemap"
        />
      </Head>
      <div className={styles.page}>
        <header className={styles.header}>
          <h1 className={styles.name}>
            <Link href="/">{t("site.name")}</Link>{" "}
          </h1>
          <div className={styles.lang}>
            {locale !== "en-US" && (
              <Link href={asPath} locale="en-US">
                English (US)
              </Link>
            )}{" "}
            {locale !== "es" && (
              <Link href={asPath} locale="es">
                Español
              </Link>
            )}{" "}
            {locale !== "ja" && (
              <Link href={asPath} locale="ja">
                日本語
              </Link>
            )}
          </div>
        </header>
        <main>{children}</main>
        <footer className={styles.footer}>
          <div className={styles.footerAlpha}>
            <Link href="/">Home</Link> <Link href="/kb" locale="en-US">Knowledge Base</Link>{" "}
            <Link href="/rss.xml" locale="en-US">RSS</Link>
          </div>
          <div className={styles.footerBeta}>
            <ruby className={styles.motto}>
              <ruby lang="ja">
                暴力<rp>(</rp><rt>ぼうりょく</rt><rp>)</rp>
                馬車<rp>(</rp><rt>ばしゃ</rt><rp>)</rp>
                機動<rp>(</rp><rt>きどう</rt><rp>)</rp>
                協会<rp>(</rp><rt>きょうかい</rt><rp>)</rp>
              </ruby>
              <rp>(</rp><rt lang={locale}>{t("components.page.motto")}</rt><rp>)</rp>
            </ruby>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Layout;

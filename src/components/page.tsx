import Head from "next/head";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import styles from "./page.module.css";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { t } = useTranslation("common");
  const { locale, pathname } = useRouter();

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/png" href="/favicon.png" sizes="64x64" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <link rel="home" href="/" />
      </Head>
      <div className={styles.page}>
        <header className={styles.header}>
          <h1 className={styles.name}>
            <Link href="/">{t("site.name")}</Link>{" "}
          </h1>
          <div className={styles.lang}>
            {locale !== "en-US" && (
              <Link href={pathname} locale="en-US">
                English (US)
              </Link>
            )}{" "}
            {locale !== "es" && (
              <Link href={pathname} locale="es">
                Español
              </Link>
            )}{" "}
            {locale !== "ja" && (
              <Link href={pathname} locale="ja">
                日本語
              </Link>
            )}
          </div>
        </header>
        <main>{children}</main>
      </div>
    </>
  );
};

export default Layout;

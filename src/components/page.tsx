import Head from "next/head";
import styles from "./page.module.css";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/png" href="/favicon.png" sizes="64x64" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <link rel="home" href="/" />
      </Head>
      <main className={styles.page}>{children}</main>
    </>
  );
};

export default Layout;

import { type NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "./index.module.css";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>
          ZNC86.club - motorsports support team for the Z N/C 8/6 chassis
        </title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          type="image/png"
          href="https://znc86.club/favicon.png"
          sizes="64x64"
        />
        <link rel="apple-touch-icon" href="https://znc86.club/favicon.png" />

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
      <div className={styles.page}>
        <h1>ZNC86.club</h1>

        <h2>motorsports support team for the Z N/C 8/6 chassis</h2>

        <div className={styles.layout}>
          <div className={styles.one}>
            <p>
              ZNC86 is <em>not an online community</em> but a
              <strong>group of friends </strong>
              sharing resources, attending events, learning, solving problems,
              having fun, and supporting each other to enjoy the pleasures of
              motoring sport in the Z N/C 8/6 chassis.
            </p>

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
              chassis of many names: Scion FR-S, Toyota 86, Toyota GR86, Subaru
              BRZ. You can find us at Club Loose, COM SCC time attack, Lock City
              Drift, North East Drift Coalition, MassTuning events, and more.
            </p>

            <p lang="es">
              ZNC86 no es una comunidad online, sino un grupo de amigos que
              comparten recursos, asisten a eventos, aprenden, resuelven
              problemas, se divierten y se apoyan mutuamente para disfrutar de
              los placeres del deporte del motor en el chasis Z N/C 8/6.
            </p>

            <p lang="ja">
              ZNC86はオンラインコミュニティではなく、リソースを共有し、イベントに参加し、
              学び、問題を解決し、楽しみ、そしてZ N/C
              8/6シャーシでのモータースポーツ
              の楽しみをサポートし合う仲間たちのグループです。
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
                ⚖️ Code of Conduct
              </a>
              <br />
              Friendly, inclusive, and simple
            </li>
            <li>
              <a
                className={styles.discord}
                href="https://forms.gle/4wmUwEzHdQjkgezo7"
                title="Join the Discord chat"
              >
                Join the Club
              </a>
              <br />
              Fill out the form and start chatting on Discord
            </li>
            <li>
              <a
                className={styles.instagram}
                href="https://instagram.com/znc86.club"
                rel="external"
              >
                Instagram
              </a>
              <br />
              Follow us @znc86.club
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Home;

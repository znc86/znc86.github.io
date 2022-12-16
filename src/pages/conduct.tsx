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

        <meta property="og:title" content={t("pages.conduct.title")} />
        <meta name="description" content="ZNC86 Code of Conduct" />
        <meta property="og:url" content="https://znc86.club/conduct" />
      </Head>
      <Page>
        <h1>ZNC86 Code of Conduct</h1>
        <p>Last updated 2022/11/21</p>

        <p>
          <strong>TL;DR</strong>
          Make friends not enemies. Strive for kindness, be polite, assume
          others are acting in good faith, be gracious when others are not. Do
          not tolerate assholes, negativity, report harassment and hate. Act
          like youʼll meet these people face-to-face tomorrow.
        </p>

        <p>
          <strong>Diversity: Everyone is Welcome</strong>
          We are inclusive and committed to being a community that everyone
          feels good about joining. Although we may not be able to satisfy
          everyone, we will always work to treat everyone well.
        </p>

        <p>This Code of Conduct applies IRL and online.</p>

        <h2>Code of Conduct</h2>

        <ol>
          <li>
            No discrimination based on gender, sexual orientation, disability,
            physical appearance, race, age, ethnicity, language, religion (or
            lack thereof), national origin, or otherwise.
          </li>
          <li>
            No stalking or harassment, this includes offensive verbal comments
            related to (1), no posting sexual images in public spaces,
            deliberate intimidation, following, harassing photography or
            recording, cyberbullying, disruption of discussions or events,
            shitposting, no inappropriate physical contact, and no unwelcome
            attention.
          </li>
          <li>
            No incitement of violence or promotion of violent ideologies, no
            xenophobia, no transphobia, no violent nationalism, no antisemitism.
          </li>
          <li>
            No ad-hominem attacks, name calling, or speech about a person or
            persons that is negative or harmful to them if the intent is to
            damage the person either emotionally or financially, or lowers them
            in the estimation of others.
          </li>
          <li>
            Sexual language and imagery is not appropriate. No sexual depictions
            of people under 18 years of age.
          </li>
          <li>
            Do not share intentionally false or misleading information. No
            conspiracy theories.
          </li>
          <li>No commercial accounts, advertising, or excessive promotion.</li>
        </ol>
      </Page>
    </>
  );
};

export default Home;

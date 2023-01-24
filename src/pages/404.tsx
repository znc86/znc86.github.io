import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import React from "react";
import Page from "../components/page";

type EventsProps = {
  locale: string;
};

export async function getStaticProps({ locale }: EventsProps) {
  return {
    props: {
      ...(await serverSideTranslations(locale)),
    },
  };
}

export default function Kb() {
  const { t } = useTranslation("common");

  return (
    <>
      <Head>
        <title>{t('pages.404.title')}</title>
      </Head>
      <Page>
        <h1>{t('pages.404.title')}</h1>
        <p>{t('pages.404.subtitle')}</p>
      </Page>
    </>
  );
}

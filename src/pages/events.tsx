import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import React from "react";
// @ts-ignore
import Calendar from "@ericz1803/react-google-calendar";
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

  const calendars = [
    { calendarId: "dpshlst16bu2i322nie1rs4u9tru2ksi@import.calendar.google.com" }, /* motorsports */
    {
      calendarId: "jo2v8hedovnfbe9n659libt3j07bn4ec@import.calendar.google.com", /* lock city drift */
      color: "#ff007f",
    },
  ];


  return (
    <>
      <Head>
        <title>{t("pages.events.title")}</title>
        <meta property="og:title" content={t("pages.events.title") || ""} />
        <meta name="description" content={t("pages.events.subtitle") || ""} />
        <meta name="og:description" content={t("pages.events.subtitle") || ""} />
        <meta property="og:url" content="https://znc86.club/events" />
        <meta property="og:image" content="https://znc86.club/icon.png" />
        <meta property="og:image:width" content="1260" />
        <meta property="og:image:height" content="1260" />
      </Head>
      <Page>
        <h1>{t("pages.events.title")}</h1>
        <p>{t("pages.events.subtitle")}</p>
        <Calendar apiKey={process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_API_KEY} calendars={calendars} />
      </Page>
    </>
  );
}

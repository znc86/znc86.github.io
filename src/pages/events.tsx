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
    {
      calendarId: "jo2v8hedovnfbe9n659libt3j07bn4ec@import.calendar.google.com", /* lock city drift */
    },
    {
      calendarId: "4305ivosuadn1nn5mv7f2gng0vcijk5t@import.calendar.google.com", /* COM SCC */
      color: "#ff007f",
    },
    {
      calendarId: "rf2eba9s6ugbpsnp1u2kih5dtdrujmjb@import.calendar.google.com", /* MassTuning */
      color: "#80FF00",
    },
    {
      calendarId: "cjsf77dn3tfc7stmms4d8mbvhk6gt9au@import.calendar.google.com", /* Club Loose */
      color: "#8000FF",
    },
    {
      calendarId: "d7bjifjscgbtg7qgcpv9f402jknkl56a@import.calendar.google.com", /* Northeast Track Club */
      color: "#0000FF",
    },
    {
      calendarId: "mskdmb3b2tul7o8b72cg8dgorevgagsl@import.calendar.google.com", /* GRIDLIFE */
      color: "#00FFFF",
    },
    {
      calendarId: "vbteo7ik5psq8sk3jlf7ddqkoelmsh5h@import.calendar.google.com", /* Final Bout, etc */
      color: "#00FF80",
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

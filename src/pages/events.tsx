import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import React, { useState } from "react";
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
      enabled: true,
      name: "Lock City Drift",
    },
    {
      calendarId: "4305ivosuadn1nn5mv7f2gng0vcijk5t@import.calendar.google.com", /* COM SCC */
      color: "#ff007f",
      enabled: true,
      name: "COM SCC",
    },
    {
      calendarId: "rf2eba9s6ugbpsnp1u2kih5dtdrujmjb@import.calendar.google.com", /* MassTuning */
      color: "#80FF00",
      enabled: true,
      name: "MassTuning",
    },
    {
      calendarId: "cjsf77dn3tfc7stmms4d8mbvhk6gt9au@import.calendar.google.com", /* Club Loose */
      color: "#8000FF",
      enabled: true,
      name: "Club Loose",
    },
    {
      calendarId: "d7bjifjscgbtg7qgcpv9f402jknkl56a@import.calendar.google.com", /* Northeast Track Club */
      color: "#0000FF",
      enabled: true,
      name: "Northeast Track Club",
    },
    {
      calendarId: "mskdmb3b2tul7o8b72cg8dgorevgagsl@import.calendar.google.com", /* GRIDLIFE */
      color: "#00FFFF",
      enabled: true,
      name: "GRIDLIFE",
    },
    {
      calendarId: "vbteo7ik5psq8sk3jlf7ddqkoelmsh5h@import.calendar.google.com", /* Final Bout, etc */
      color: "#00FF80",
      enabled: true,
      name: "Final Bout, Super Lap Battle, Lebanon Valley Drift, Staggered",
    },
  ];
  const [activeCalendars, setActiveCalendars] = useState(calendars);
  const [allCalendars, setAllCalendars] = useState(calendars);

  // @ts-ignore
  function toggleCalendar(calendar, index, state) {
    const all = [...allCalendars];
    // @ts-ignore
    all[index]['enabled'] = state;
    const active = all.filter(calendar => calendar.enabled);
    // @ts-ignore
    setAllCalendars(all);
    setActiveCalendars(active);
  }

  // @ts-ignore
  function MyCal(props) {
    return <Calendar apiKey={process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_API_KEY} calendars={props.calendars} />
  }

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
        <ul>
          {allCalendars.map((calendar, index) => (
            <li key={calendar.calendarId}>
              <input type="checkbox" onChange={() => toggleCalendar(calendar, index, !calendar.enabled)} checked={calendar.enabled} />{calendar.name}
            </li>
          ))}
        </ul>
        <MyCal calendars={activeCalendars} />
      </Page>
    </>
  );
}

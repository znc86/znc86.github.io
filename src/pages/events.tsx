import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import React, { useState } from "react";
// @ts-ignore
import Calendar from "@ericz1803/react-google-calendar";
import Page from "../components/page";
import styles from "./events.module.css";

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
      calendarId:
        "jo2v8hedovnfbe9n659libt3j07bn4ec@import.calendar.google.com" /* lock city drift */,
      enabled: true,
      color: "#179fd9",
      name: "Lock City Drift",
    },
    {
      calendarId:
        "4305ivosuadn1nn5mv7f2gng0vcijk5t@import.calendar.google.com" /* COM SCC */,
      color: "#1da583",
      enabled: true,
      name: "COM SCC",
    },
    {
      calendarId:
        "rf2eba9s6ugbpsnp1u2kih5dtdrujmjb@import.calendar.google.com" /* MassTuning */,
      color: "#8080ff",
      enabled: true,
      name: "MassTuning",
    },
    {
      calendarId:
        "cjsf77dn3tfc7stmms4d8mbvhk6gt9au@import.calendar.google.com" /* Club Loose */,
      color: "#db60d6",
      enabled: true,
      name: "Club Loose",
    },
    {
      calendarId:
        "2s5c5k7b4vna1nemimfa576140l4mqjm@import.calendar.google.com" /* SCCA Track Night */,
      color: "#9e69af",
      enabled: true,
      name: "SCCA Track Night",
    },
    {
      calendarId:
        "d7bjifjscgbtg7qgcpv9f402jknkl56a@import.calendar.google.com" /* Northeast Track Club */,
      color: "#ec3e7c",
      enabled: true,
      name: "Northeast Track Club",
    },
    {
      calendarId:
        "mskdmb3b2tul7o8b72cg8dgorevgagsl@import.calendar.google.com" /* GRIDLIFE */,
      color: "#f78400",
      enabled: true,
      name: "GRIDLIFE",
    },
    {
      calendarId:
        "vbteo7ik5psq8sk3jlf7ddqkoelmsh5h@import.calendar.google.com" /* Final Bout, etc */,
      color: "#936d58",
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
    all[index]["enabled"] = state;
    const active = all.filter((calendar) => calendar.enabled);
    // @ts-ignore
    setAllCalendars(all);
    setActiveCalendars(active);
  }

  // @ts-ignore
  function MyCal(props) {
    return (
      <Calendar
        apiKey={process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_API_KEY}
        calendars={props.calendars}
      />
    );
  }

  return (
    <>
      <Head>
        <title>{t("pages.events.title")}</title>
        <meta property="og:title" content={t("pages.events.title") || ""} />
        <meta name="description" content={t("pages.events.subtitle") || ""} />
        <meta
          name="og:description"
          content={t("pages.events.subtitle") || ""}
        />
        <meta property="og:url" content="https://type-ra.org/events" />
        <meta property="og:image" content="https://type-ra.org/icon.png" />
        <meta property="og:image:width" content="1260" />
        <meta property="og:image:height" content="1260" />
      </Head>
      <Page>
        <h1>{t("pages.events.title")}</h1>
        <p>{t("pages.events.subtitle")}</p>
        <ul className={styles.picker}>
          {allCalendars.map((calendar, index) => (
            <li
              key={calendar.calendarId}
              className={styles.item}
              style={{ backgroundColor: calendar.color }}
            >
              <label>
                <input
                  type="checkbox"
                  onChange={() =>
                    toggleCalendar(calendar, index, !calendar.enabled)
                  }
                  checked={calendar.enabled}
                />
                {calendar.name}
              </label>
            </li>
          ))}
        </ul>
        <MyCal calendars={activeCalendars} />
      </Page>
    </>
  );
}

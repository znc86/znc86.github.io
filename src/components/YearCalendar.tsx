import React, { useEffect, useMemo, useState, useSyncExternalStore } from "react";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next/pages";
import {
  fetchYearEvents,
  startOfDay,
  type CalendarEvent,
  type CalendarFetchError,
  type CalendarSource,
} from "../lib/googleCalendar";
import {
  DAY_COLUMNS,
  MONTH_INDICES,
  buildMonthSegments,
  daysInMonth,
  packLanes,
  type MonthSegment,
} from "../lib/yearCalendar";
import styles from "./YearCalendar.module.css";

/** 1..31, the fixed column axis every month row is aligned to. */
const DAY_NUMBERS = Array.from({ length: DAY_COLUMNS }, (_, index) => index + 1);

const FALLBACK_COLOR = "#767676";

/* Stable identities for useSyncExternalStore; the value never changes after hydration. */
const subscribeNoop = () => () => {};
const getTrue = () => true;
const getFalse = () => false;

/* Stable identities so a pending fetch does not invalidate downstream useMemo deps. */
const NO_EVENTS: CalendarEvent[] = [];
const NO_ERRORS: CalendarFetchError[] = [];

type YearCalendarProps = {
  apiKey?: string;
  /** Calendars to fetch and display. Colors and names come from here. */
  calendars: CalendarSource[];
};

/**
 * `location` is free text, but calendars commonly hold a meeting link there.
 * Returns the http(s) URL when the field is one, otherwise null.
 */
function locationUrl(location: string): string | null {
  if (!location) return null;
  try {
    const url = new URL(location);
    return url.protocol === "http:" || url.protocol === "https:" ? url.href : null;
  } catch {
    return null;
  }
}

function isWeekend(year: number, month: number, day: number): boolean {
  const weekday = new Date(year, month, day).getDay();
  return weekday === 0 || weekday === 6;
}

export default function YearCalendar({ apiKey, calendars }: YearCalendarProps) {
  const { t } = useTranslation("common");
  const { locale } = useRouter();
  const resolvedLocale = locale ?? "en-US";

  // This page is statically generated, so reading the clock during render would
  // bake the build date into the HTML and mismatch on hydration. useSyncExternalStore
  // reports false for the server snapshot and true once hydrated, which gives a
  // client-only value without setting state from an effect.
  const isHydrated = useSyncExternalStore(subscribeNoop, getTrue, getFalse);
  const today = useMemo(
    () => (isHydrated ? startOfDay(new Date()) : null),
    [isHydrated],
  );

  // Year is derived from `today` until the user navigates away from it.
  const [selectedYear, setSelectedYear] = useState<number | null>(null);
  const year = selectedYear ?? today?.getFullYear() ?? null;

  // The caller rebuilds the `calendars` array on every render and swaps `enabled`
  // when toggling, so the fetch keys off this joined id string instead. Calendar
  // ids are email-shaped and cannot contain a comma.
  const calendarIdKey = calendars.map((calendar) => calendar.calendarId).join(",");

  // One key identifies a single fetch. Deriving `loading` and the event list by
  // comparing it against the loaded result avoids a synchronous setState in the
  // effect, which would cause a cascading render.
  const requestKey =
    year === null || !apiKey ? null : `${year}|${resolvedLocale}|${calendarIdKey}`;

  const [result, setResult] = useState<{
    key: string;
    events: CalendarEvent[];
    errors: CalendarFetchError[];
  } | null>(null);

  useEffect(() => {
    if (requestKey === null || year === null || !apiKey) return;

    const controller = new AbortController();
    const calendarIds = calendarIdKey.split(",").filter(Boolean);

    fetchYearEvents(calendarIds, apiKey, year, resolvedLocale, controller.signal)
      .then((fetched) => {
        if (controller.signal.aborted) return;
        setResult({ key: requestKey, ...fetched });
      })
      .catch((error: unknown) => {
        if (controller.signal.aborted) return;
        const message = error instanceof Error ? error.message : String(error);
        setResult({ key: requestKey, events: [], errors: [{ calendarId: "", message }] });
      });

    return () => controller.abort();
  }, [requestKey, year, apiKey, resolvedLocale, calendarIdKey]);

  const isCurrent = result !== null && result.key === requestKey;
  const loading = requestKey !== null && !isCurrent;
  const events = isCurrent ? result.events : NO_EVENTS;
  const errors = isCurrent ? result.errors : NO_ERRORS;

  const sourceById = useMemo(() => {
    const map = new Map<string, CalendarSource>();
    for (const calendar of calendars) map.set(calendar.calendarId, calendar);
    return map;
  }, [calendars]);

  // Toggling a calendar off only hides it; the fetched events are kept so
  // toggling it back on is instant.
  const visibleEvents = useMemo(
    () => events.filter((event) => sourceById.get(event.calendarId)?.enabled !== false),
    [events, sourceById],
  );

  const formatters = useMemo(
    () => ({
      weekday: new Intl.DateTimeFormat(resolvedLocale, { weekday: "narrow" }),
      month: new Intl.DateTimeFormat(resolvedLocale, { month: "short" }),
      fullDate: new Intl.DateTimeFormat(resolvedLocale, { dateStyle: "full" }),
    }),
    [resolvedLocale],
  );

  if (year === null || today === null) {
    return <p className={styles.status}>{t("components.calendar.loading")}</p>;
  }

  return (
    <div className={styles.calendar}>
      <div className={styles.toolbar}>
        <button
          type="button"
          className={styles.navButton}
          onClick={() => setSelectedYear(year - 1)}
          aria-label={t("components.calendar.previousYear") || undefined}
        >
          ← {year - 1}
        </button>
        <h2 className={styles.year}>{year}</h2>
        <button
          type="button"
          className={styles.navButton}
          onClick={() => setSelectedYear(year + 1)}
          aria-label={t("components.calendar.nextYear") || undefined}
        >
          {year + 1} →
        </button>
      </div>

      {!apiKey && <p className={styles.error}>{t("components.calendar.missingApiKey")}</p>}
      {loading && <p className={styles.status}>{t("components.calendar.loading")}</p>}
      {errors.map((error, index) => (
        <p className={styles.error} key={`${error.calendarId}-${index}`}>
          {t("components.calendar.loadError", {
            name: sourceById.get(error.calendarId)?.name ?? error.calendarId,
          })}{" "}
          {error.message}
        </p>
      ))}
      {!loading && apiKey && errors.length === 0 && visibleEvents.length === 0 && (
        <p className={styles.status}>{t("components.calendar.noEvents")}</p>
      )}

      <div className={styles.scroller}>
        <div className={styles.grid}>
          {/*
            No header row: day-of-month columns drift by weekday from one month
            to the next, so a shared header could only ever line up with one
            row. Each cell carries its own weekday letter and day number.
          */}
          {MONTH_INDICES.map((month) => (
            <MonthRow
              key={month}
              year={year}
              month={month}
              today={today}
              events={visibleEvents}
              sourceById={sourceById}
              monthLabel={formatters.month.format(new Date(year, month, 1))}
              weekdayFormatter={formatters.weekday}
              fullDateFormatter={formatters.fullDate}
              allDayLabel={t("components.calendar.allDay") || "All day"}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

type MonthRowProps = {
  year: number;
  month: number;
  today: Date;
  events: CalendarEvent[];
  sourceById: Map<string, CalendarSource>;
  monthLabel: string;
  weekdayFormatter: Intl.DateTimeFormat;
  fullDateFormatter: Intl.DateTimeFormat;
  allDayLabel: string;
};

function MonthRow({
  year,
  month,
  today,
  events,
  sourceById,
  monthLabel,
  weekdayFormatter,
  fullDateFormatter,
  allDayLabel,
}: MonthRowProps) {
  const lanes = useMemo(() => packLanes(buildMonthSegments(events, year, month)), [
    events,
    year,
    month,
  ]);

  const totalDays = daysInMonth(year, month);
  const laneCount = Math.max(lanes.length, 1);
  const isCurrentMonth = today.getFullYear() === year && today.getMonth() === month;

  return (
    <div
      className={isCurrentMonth ? `${styles.monthRow} ${styles.currentMonth}` : styles.monthRow}
      style={{ gridTemplateRows: `var(--day-number-height) repeat(${laneCount}, var(--lane-height))` }}
    >
      <div className={styles.monthLabel}>{monthLabel}</div>

      {/* Column backgrounds span every lane, so they draw the day borders. */}
      {DAY_NUMBERS.map((day) => {
        if (day > totalDays) {
          return (
            <div
              key={`bg-${day}`}
              className={`${styles.dayBackground} ${styles.dayOutside}`}
              style={{ gridColumn: day + 1 }}
              aria-hidden="true"
            />
          );
        }
        const isToday = isCurrentMonth && today.getDate() === day;
        const classNames = [styles.dayBackground];
        if (isWeekend(year, month, day)) classNames.push(styles.weekend);
        if (isToday) classNames.push(styles.today);
        return (
          <div
            key={`bg-${day}`}
            className={classNames.join(" ")}
            style={{ gridColumn: day + 1 }}
            title={fullDateFormatter.format(new Date(year, month, day))}
          />
        );
      })}

      {DAY_NUMBERS.map((day) =>
        day > totalDays ? null : (
          <div key={`num-${day}`} className={styles.dayNumber} style={{ gridColumn: day + 1 }}>
            <span className={styles.dayWeekday}>
              {weekdayFormatter.format(new Date(year, month, day))}
            </span>
            <span className={styles.dayDigits}>{day}</span>
          </div>
        ),
      )}

      {lanes.map((lane, laneIndex) =>
        lane.map((segment) => (
          <EventBar
            key={segment.event.id}
            segment={segment}
            laneIndex={laneIndex}
            source={sourceById.get(segment.event.calendarId)}
            allDayLabel={allDayLabel}
          />
        )),
      )}
    </div>
  );
}

type EventBarProps = {
  segment: MonthSegment;
  laneIndex: number;
  source: CalendarSource | undefined;
  allDayLabel: string;
};

function EventBar({ segment, laneIndex, source, allDayLabel }: EventBarProps) {
  const { event, startDay, endDay, continuesBefore, continuesAfter } = segment;

  const classNames = [styles.event];
  if (continuesBefore) classNames.push(styles.continuesBefore);
  if (continuesAfter) classNames.push(styles.continuesAfter);

  const style: React.CSSProperties = {
    // +1 for the month label column, +1 more on the end because grid column
    // lines sit between columns.
    gridColumn: `${startDay + 1} / ${endDay + 2}`,
    gridRow: laneIndex + 2,
    backgroundColor: source?.color ?? FALLBACK_COLOR,
  };

  const location = event.location.trim();
  const url = locationUrl(location);

  // A URL location is the link target rather than label text, so only a
  // human-readable location gets appended to the title.
  const title = url || !location ? event.title : `${event.title} at ${location}`;

  // The location is already part of `title` unless it is a URL.
  const tooltip = [title, event.allDay ? allDayLabel : event.timeLabel, url, source?.name]
    .filter(Boolean)
    .join("\n");

  const label = <span className={styles.eventTitle}>{title}</span>;

  const href = url ?? event.htmlLink;

  if (href) {
    return (
      <a
        className={classNames.join(" ")}
        style={style}
        href={href}
        target="_blank"
        rel="noreferrer"
        title={tooltip}
      >
        {label}
      </a>
    );
  }

  return (
    <div className={classNames.join(" ")} style={style} title={tooltip}>
      {label}
    </div>
  );
}

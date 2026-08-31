import React, { useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
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

type YearCalendarProps = {
  apiKey?: string;
  /** Calendars to fetch and display. Colors and names come from here. */
  calendars: CalendarSource[];
};

function isWeekend(year: number, month: number, day: number): boolean {
  const weekday = new Date(year, month, day).getDay();
  return weekday === 0 || weekday === 6;
}

export default function YearCalendar({ apiKey, calendars }: YearCalendarProps) {
  const { t } = useTranslation("common");
  const { locale } = useRouter();
  const resolvedLocale = locale ?? "en-US";

  // `today` and `year` stay null until after mount. This page is statically
  // generated, so reading the clock during render would bake the build date
  // into the HTML and mismatch on hydration.
  const [today, setToday] = useState<Date | null>(null);
  const [year, setYear] = useState<number | null>(null);
  const [events, setEvents] = useState<CalendarEvent[]>([]);
  const [errors, setErrors] = useState<CalendarFetchError[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const now = new Date();
    setToday(startOfDay(now));
    setYear(now.getFullYear());
  }, []);

  // The id list drives fetching, but the caller rebuilds the `calendars` array
  // on every render (and mutates `enabled` when toggling). Depending on a
  // joined key keeps the effect stable; the ref supplies the current ids.
  const calendarIdKey = calendars.map((calendar) => calendar.calendarId).join(",");
  const calendarIdsRef = useRef<string[]>([]);
  calendarIdsRef.current = calendars.map((calendar) => calendar.calendarId);

  useEffect(() => {
    if (year === null || !apiKey) return;

    const controller = new AbortController();
    setLoading(true);

    fetchYearEvents(calendarIdsRef.current, apiKey, year, resolvedLocale, controller.signal)
      .then((result) => {
        if (controller.signal.aborted) return;
        setEvents(result.events);
        setErrors(result.errors);
        setLoading(false);
      })
      .catch((error: unknown) => {
        if (controller.signal.aborted) return;
        const message = error instanceof Error ? error.message : String(error);
        setEvents([]);
        setErrors([{ calendarId: "", message }]);
        setLoading(false);
      });

    return () => controller.abort();
  }, [year, apiKey, resolvedLocale, calendarIdKey]);

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
          onClick={() => setYear(year - 1)}
          aria-label={t("components.calendar.previousYear") || undefined}
        >
          ← {year - 1}
        </button>
        <h2 className={styles.year}>{year}</h2>
        <button
          type="button"
          className={styles.navButton}
          onClick={() => setYear(year + 1)}
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

  const tooltip = [
    event.title,
    event.allDay ? allDayLabel : event.timeLabel,
    event.location,
    source?.name,
  ]
    .filter(Boolean)
    .join("\n");

  const label = <span className={styles.eventTitle}>{event.title}</span>;

  if (event.htmlLink) {
    return (
      <a
        className={classNames.join(" ")}
        style={style}
        href={event.htmlLink}
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

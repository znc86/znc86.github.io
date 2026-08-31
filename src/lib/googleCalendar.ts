/**
 * Minimal Google Calendar API v3 client.
 *
 * This replaces the fetching half of @ericz1803/react-google-calendar (see its
 * `utils/googleCalendarAPI.js`), which injected a <script> tag for Google's
 * whole `gapi` JS SDK and then used `rrule` to expand recurring events by hand.
 * Asking the REST endpoint for `singleEvents=true` makes Google expand
 * recurrences server-side, so a plain `fetch` covers everything we need.
 */

const API_BASE = "https://www.googleapis.com/calendar/v3/calendars";

/** A calendar to display, as declared by the caller. */
export type CalendarSource = {
  calendarId: string;
  /** CSS color used as the background of this calendar's event bars. */
  color: string;
  name: string;
  /** Defaults to true when omitted. */
  enabled?: boolean;
};

/**
 * A single occurrence of an event, reduced to whole days.
 *
 * Day boundaries are what the calendar grid renders, so both ends are
 * normalized to local midnight: `start` is the first day covered and
 * `endExclusive` is the day *after* the last day covered.
 */
export type CalendarEvent = {
  id: string;
  title: string;
  calendarId: string;
  start: Date;
  endExclusive: Date;
  allDay: boolean;
  location: string;
  htmlLink: string;
  /** Localized time range, empty for all-day events. */
  timeLabel: string;
};

export type CalendarFetchError = {
  calendarId: string;
  message: string;
};

export type CalendarFetchResult = {
  events: CalendarEvent[];
  errors: CalendarFetchError[];
};

type GoogleDateTime = {
  date?: string;
  dateTime?: string;
};

type GoogleEvent = {
  id?: string;
  status?: string;
  summary?: string;
  location?: string;
  htmlLink?: string;
  start?: GoogleDateTime;
  end?: GoogleDateTime;
};

type GoogleEventsResponse = {
  items?: GoogleEvent[];
  nextPageToken?: string;
  error?: { message?: string };
};

/** Local midnight on the same calendar day as `date`. */
export function startOfDay(date: Date): Date {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

/** Local midnight `amount` days after `date`. Handles month/year rollover. */
export function addDays(date: Date, amount: number): Date {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate() + amount);
}

/**
 * Parse a `YYYY-MM-DD` all-day date in the *local* zone.
 *
 * `new Date("2026-08-07")` is specified to parse as UTC midnight, which lands
 * on Aug 6 for anyone west of Greenwich and would shift every all-day event a
 * day earlier. Splitting the parts sidesteps that.
 */
function parseAllDayDate(value: string): Date | null {
  const parts = value.split("-").map(Number);
  const [year, month, day] = parts;
  if (parts.length !== 3 || year === undefined || month === undefined || day === undefined) {
    return null;
  }
  if (!Number.isFinite(year) || !Number.isFinite(month) || !Number.isFinite(day)) {
    return null;
  }
  return new Date(year, month - 1, day);
}

function formatTimeRange(start: Date, end: Date, locale: string): string {
  const formatter = new Intl.DateTimeFormat(locale, {
    hour: "numeric",
    minute: "2-digit",
  });
  const from = formatter.format(start);
  const to = formatter.format(end);
  return from === to ? from : `${from} – ${to}`;
}

/** Reduce one Google event to whole local days, or null if unusable. */
function normalizeEvent(
  raw: GoogleEvent,
  calendarId: string,
  locale: string,
): CalendarEvent | null {
  if (raw.status === "cancelled") return null;
  if (!raw.id || !raw.start) return null;

  const base = {
    id: `${calendarId}:${raw.id}`,
    title: raw.summary ?? "(untitled)",
    calendarId,
    location: raw.location ?? "",
    htmlLink: raw.htmlLink ?? "",
  };

  // All-day event: Google already reports `end.date` as exclusive.
  if (raw.start.date) {
    const start = parseAllDayDate(raw.start.date);
    if (!start) return null;
    const parsedEnd = raw.end?.date ? parseAllDayDate(raw.end.date) : null;
    const endExclusive =
      parsedEnd && parsedEnd.getTime() > start.getTime() ? parsedEnd : addDays(start, 1);
    return { ...base, start, endExclusive, allDay: true, timeLabel: "" };
  }

  // Timed event: `end.dateTime` is a real instant, so derive the last day.
  if (raw.start.dateTime) {
    const startAt = new Date(raw.start.dateTime);
    if (Number.isNaN(startAt.getTime())) return null;
    const parsedEnd = raw.end?.dateTime ? new Date(raw.end.dateTime) : null;
    const endAt =
      parsedEnd && !Number.isNaN(parsedEnd.getTime()) && parsedEnd > startAt ? parsedEnd : startAt;

    const start = startOfDay(startAt);
    let lastDay = startOfDay(endAt);
    // An event ending exactly at midnight stops at the end of the previous day;
    // without this a 6pm–midnight event would claim a second, empty day.
    if (endAt.getTime() === lastDay.getTime() && lastDay.getTime() > start.getTime()) {
      lastDay = addDays(lastDay, -1);
    }

    return {
      ...base,
      start,
      endExclusive: addDays(lastDay, 1),
      allDay: false,
      timeLabel: formatTimeRange(startAt, endAt, locale),
    };
  }

  return null;
}

/** Fetch one calendar, following `nextPageToken` until exhausted. */
async function fetchCalendarEvents(
  calendarId: string,
  apiKey: string,
  timeMin: Date,
  timeMax: Date,
  locale: string,
  signal?: AbortSignal,
): Promise<CalendarEvent[]> {
  const events: CalendarEvent[] = [];
  let pageToken: string | undefined;

  do {
    const params = new URLSearchParams({
      key: apiKey,
      singleEvents: "true",
      orderBy: "startTime",
      maxResults: "2500",
      timeMin: timeMin.toISOString(),
      timeMax: timeMax.toISOString(),
    });
    if (pageToken) params.set("pageToken", pageToken);

    const url = `${API_BASE}/${encodeURIComponent(calendarId)}/events?${params.toString()}`;
    const response = await fetch(url, { signal });
    const body: GoogleEventsResponse = await response
      .json()
      .catch(() => ({}) as GoogleEventsResponse);

    if (!response.ok) {
      throw new Error(body.error?.message ?? `${response.status} ${response.statusText}`);
    }

    for (const raw of body.items ?? []) {
      const event = normalizeEvent(raw, calendarId, locale);
      if (event) events.push(event);
    }
    pageToken = body.nextPageToken;
  } while (pageToken);

  return events;
}

/**
 * Fetch every calendar's events for one year.
 *
 * A calendar that fails (bad id, revoked key, quota) is reported in `errors`
 * rather than failing the whole grid, so one broken feed can't blank the page.
 */
export async function fetchYearEvents(
  calendarIds: string[],
  apiKey: string,
  year: number,
  locale: string,
  signal?: AbortSignal,
): Promise<CalendarFetchResult> {
  const timeMin = new Date(year, 0, 1);
  const timeMax = new Date(year + 1, 0, 1);

  const settled = await Promise.all(
    calendarIds.map(async (calendarId): Promise<CalendarFetchResult> => {
      try {
        const events = await fetchCalendarEvents(
          calendarId,
          apiKey,
          timeMin,
          timeMax,
          locale,
          signal,
        );
        return { events, errors: [] };
      } catch (error) {
        if (error instanceof DOMException && error.name === "AbortError") throw error;
        const message = error instanceof Error ? error.message : String(error);
        return { events: [], errors: [{ calendarId, message }] };
      }
    }),
  );

  return {
    events: settled.flatMap((result) => result.events),
    errors: settled.flatMap((result) => result.errors),
  };
}

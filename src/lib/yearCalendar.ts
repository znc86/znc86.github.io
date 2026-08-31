/**
 * Layout math for the year calendar grid.
 *
 * The grid is one row per month and one column per day-of-month. Because the
 * longest month has 31 days, every row gets 31 columns and shorter months leave
 * trailing columns empty.
 */

import type { CalendarEvent } from "./googleCalendar";

/** Column count, fixed so every month row stays aligned. */
export const DAY_COLUMNS = 31;

/**
 * One event's run of days within a single month.
 *
 * A multi-day event that crosses a month boundary yields one segment per month
 * it touches, each clipped to that month.
 */
export type MonthSegment = {
  event: CalendarEvent;
  /** 1-based, inclusive. */
  startDay: number;
  /** 1-based, inclusive. */
  endDay: number;
  /** The event began in an earlier month. */
  continuesBefore: boolean;
  /** The event continues into a later month. */
  continuesAfter: boolean;
};

export function daysInMonth(year: number, month: number): number {
  // Day 0 of the next month is the last day of this one.
  return new Date(year, month + 1, 0).getDate();
}

/**
 * Clip every event to `month`, dropping those that don't overlap it.
 *
 * Events are ordered by start day, then longest-first, so that when they are
 * packed into lanes the long spanning bars settle at the top of the row.
 */
export function buildMonthSegments(
  events: CalendarEvent[],
  year: number,
  month: number,
): MonthSegment[] {
  const monthStart = new Date(year, month, 1);
  const monthEndExclusive = new Date(year, month + 1, 1);
  const lastColumn = daysInMonth(year, month);

  const segments: MonthSegment[] = [];

  for (const event of events) {
    // Half-open interval overlap test.
    if (
      event.endExclusive.getTime() <= monthStart.getTime() ||
      event.start.getTime() >= monthEndExclusive.getTime()
    ) {
      continue;
    }

    const continuesBefore = event.start.getTime() < monthStart.getTime();
    const startDay = continuesBefore ? 1 : event.start.getDate();

    // endExclusive is the day after the event; step back to the last real day.
    const lastDayMs = event.endExclusive.getTime() - 1;
    const continuesAfter = lastDayMs >= monthEndExclusive.getTime();
    const endDay = continuesAfter ? lastColumn : new Date(lastDayMs).getDate();

    if (endDay < startDay) continue;

    segments.push({ event, startDay, endDay, continuesBefore, continuesAfter });
  }

  return segments.sort(
    (a, b) =>
      a.startDay - b.startDay ||
      (b.endDay - b.startDay) - (a.endDay - a.startDay) ||
      a.event.title.localeCompare(b.event.title),
  );
}

/**
 * Pack segments into non-overlapping lanes (the sub-rows of a month).
 *
 * Greedy first-fit: walk segments left to right and drop each into the first
 * lane whose last segment already ended. Because the input is sorted by start
 * day, checking only each lane's last segment is sufficient.
 */
export function packLanes(segments: MonthSegment[]): MonthSegment[][] {
  const lanes: MonthSegment[][] = [];

  for (const segment of segments) {
    const lane = lanes.find((candidate) => {
      const last = candidate[candidate.length - 1];
      return last !== undefined && last.endDay < segment.startDay;
    });

    if (lane) lane.push(segment);
    else lanes.push([segment]);
  }

  return lanes;
}

/** Month indices in display order: January at the top through December. */
export const MONTH_INDICES: readonly number[] = Array.from(
  { length: 12 },
  (_, index) => index,
);

import { format, formatRelative, intlFormatDistance, subDays } from "date-fns";
import CalendarEntry from "~/lib/models/calendar-entry";
import calendar, { GOOGLE_CALENDAR_ID } from "~/lib/services/google-calendar";

const getCalendarEntries = async (): Promise<CalendarEntry[]> => {
  console.log("google-calendar-reader", "getting events", GOOGLE_CALENDAR_ID);
  const e = await calendar.events.list({
    calendarId: GOOGLE_CALENDAR_ID,
    singleEvents: false,
    timeMin: new Date().toISOString(),
  });
  const events = await _mapEvents(e, calendar).then((r) => Promise.all(r));
  return events;
};
async function getNextEventDate(calendar: any, event: any) {
  const now = new Date();

  if (event.recurrence) {
    // If the event is recurring, we need to expand the recurrence
    const instances = await calendar.events.instances({
      calendarId: GOOGLE_CALENDAR_ID,
      eventId: event.id,
      timeMin: now.toISOString(),
      maxResults: 1,
      orderBy: "startTime",
      singleEvents: true,
    });

    if (instances.data.items.length > 0) {
      const dt = new Date(
        instances.data.items[0].start.dateTime ||
          instances.data.items[0].start.date
      );
      return dt;
    }
  } else if (new Date(event.start.dateTime || event.start.date) > now) {
    // If it's a single event in the future
    return new Date(event.start.dateTime || event.start.date);
  }

  return null; // No future occurrences found
}

const _mapEvents = async (
  events: any,
  calendar: any
): Promise<CalendarEntry[]> => {
  return events.data.items
    .filter((r: any) => {
      return r.status !== "cancelled";
    })
    .map(async (r: any): Promise<CalendarEntry> => {
      const date = r.start.dateTime || r.start.date;
      const nextDate = (await getNextEventDate(calendar, r)) || new Date(date);

      try {
        if (r.status === "cancelled") {
        }
        const event = {
          id: r.id,
          title: r.summary,
          date: format(nextDate, "dd/MM/yyyy HH:mm"),
          creator: r.creator.email,
        };
        return event;
      } catch (e) {
        console.error("google-calendar-reader", "Error", e, r);
        return {
          id: r.id,
          title: r.summary,
          date: r.start.dateTime,
          creator: r.creator.email,
        };
      }
    });
};
export { getCalendarEntries };

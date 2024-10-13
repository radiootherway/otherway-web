import { google } from "googleapis";

const credentials = JSON.parse(
  Buffer.from(process.env.GOOGLE_CRENTIALS as string, "base64").toString()
);
console.log("google-calendar", "credentials", credentials);

const GOOGLE_CALENDAR_ID = process.env.GOOGLE_CALENDAR_ID;
const SCOPES = ["https://www.googleapis.com/auth/calendar"];

const jwtClient = new google.auth.JWT(
  credentials.client_email,
  undefined,
  credentials.private_key,
  SCOPES
);
const calendar = google.calendar({
  version: "v3",
  auth: jwtClient,
});

export default calendar;
export { GOOGLE_CALENDAR_ID };

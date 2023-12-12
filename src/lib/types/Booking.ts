import { Place } from "./Place";
import { Dayjs } from "dayjs";

export type Booking = Place & {
  bookingId?: string;
  dateFrom: Dayjs;
  dateTo: Dayjs;
};

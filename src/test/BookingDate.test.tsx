import { it, describe, expect, vi, afterEach } from "vitest";
import {
  render,
  screen,
  fireEvent,
  waitFor,
  cleanup,
} from "@testing-library/react";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import BookingDate, { IBookingDate } from "../components/molecules/BookingDate";
import dayjs from "dayjs";

const renderBookingDate = (props: IBookingDate): void => {
  const bookingCardComponent = (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <BookingDate {...props} />
    </LocalizationProvider>
  );

  render(bookingCardComponent);
};

describe("BookingDate component", () => {
  afterEach(() => cleanup());

  const defaultMinDates = {
    testMinDateFrom: dayjs("01/01/2023"),
    testMinDateTo: dayjs("01/02/2023"),
  };

  it("renders", () => {
    const bookingDateProps: IBookingDate = {
      ...defaultMinDates,
      dateFrom: dayjs(),
      dateTo: dayjs().add(1, "day"),
    };

    renderBookingDate(bookingDateProps);

    const bookingCardText = screen.getByLabelText(new RegExp("From", "i"));
    expect(bookingCardText).toBeDefined();
  });

  it("fires onChangeFrom", async () => {
    const mockOnChange = vi.fn();
    const dateFrom = dayjs().add(2, "day");

    const bookingDateProps: IBookingDate = {
      ...defaultMinDates,
      dateFrom: dateFrom,
      dateTo: dayjs().add(3, "day"),
      onChangeFrom: mockOnChange,
    };

    renderBookingDate(bookingDateProps);

    const dateInput = screen.getByDisplayValue(
      dateFrom.format("MM/DD/YYYY").toString()
    );
    fireEvent.click(dateInput);

    await waitFor(() => screen.getByRole("dialog"));

    const dateFromObj = screen.getByText("20");
    fireEvent.click(dateFromObj);

    expect(mockOnChange).toHaveBeenCalled();
  });

  it("fires onChangeTo", async () => {
    const mockOnChange = vi.fn();
    const dateTo = dayjs().add(1, "day");

    const bookingDateProps: IBookingDate = {
      ...defaultMinDates,
      dateFrom: dayjs().add(2, "day"),
      dateTo: dateTo,
      onChangeTo: mockOnChange,
    };

    renderBookingDate(bookingDateProps);

    const dateInput = screen.getByDisplayValue(
      dateTo.format("MM/DD/YYYY").toString()
    );
    fireEvent.click(dateInput);

    await waitFor(() => screen.getByRole("dialog"));

    const dateToObj = screen.getByText("20");
    fireEvent.click(dateToObj);

    expect(mockOnChange).toHaveBeenCalled();
  });
});

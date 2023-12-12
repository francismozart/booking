import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import { BookingDateContainer } from "../../styles/BookingDate.styled";
import dayjs, { Dayjs } from "dayjs";
import { useLayoutEffect } from "react";

export interface IBookingDate {
  dateFrom: Dayjs;
  dateTo: Dayjs;
  testMinDateFrom?: Dayjs;
  testMinDateTo?: Dayjs;
  onChangeFrom?: (value: Dayjs | null) => void;
  onChangeTo?: (value: Dayjs | null) => void;
}

const BookingDate = ({
  dateFrom,
  dateTo,
  onChangeFrom,
  onChangeTo,
  testMinDateFrom,
  testMinDateTo,
}: IBookingDate) => {
  const tomorrow = dayjs().add(1, "day");
  const aDayAfterDateFrom = dayjs(dateFrom).add(1, "day");

  useLayoutEffect(() => {
    if (
      (dateFrom.isSame(dateTo) || dateFrom.isAfter(dateTo)) &&
      typeof onChangeTo === "function"
    ) {
      onChangeTo(dateFrom.add(1, "day"));
    }
  }, [dateFrom, dateTo, onChangeTo]);

  return (
    <BookingDateContainer>
      <MobileDatePicker
        label="From"
        value={dateFrom}
        onChange={onChangeFrom}
        minDate={testMinDateFrom ?? tomorrow}
        closeOnSelect
        disablePast
      />
      <MobileDatePicker
        label="To"
        value={dateTo}
        onChange={onChangeTo}
        minDate={testMinDateTo ?? aDayAfterDateFrom}
        closeOnSelect
        disablePast
      />
    </BookingDateContainer>
  );
};

export default BookingDate;

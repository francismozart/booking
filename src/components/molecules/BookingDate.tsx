import { DatePicker } from "@mui/x-date-pickers/DatePicker";
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

  const onKeyDown = (e: React.KeyboardEvent) => {
    e.preventDefault();
  };
  const customTextField = {textField: { onKeyDown: onKeyDown }}

  return (
    <BookingDateContainer>
      <DatePicker
        label="From"
        value={dateFrom}
        onChange={onChangeFrom}
        minDate={testMinDateFrom ?? tomorrow}
        closeOnSelect
        disablePast
        slotProps={customTextField}
      />
      <DatePicker
        label="To"
        value={dateTo}
        onChange={onChangeTo}
        minDate={testMinDateTo ?? aDayAfterDateFrom}
        closeOnSelect
        disablePast
        slotProps={customTextField}
      />
    </BookingDateContainer>
  );
};

export default BookingDate;

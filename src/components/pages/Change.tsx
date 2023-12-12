import { useLayoutEffect, useState } from "react";
import { Dayjs } from "dayjs";
import BookingDetails from "../organisms/BookingDetails";
import PrimaryButton from "../atoms/PrimaryButton";

import { useParams, useNavigate } from "react-router-dom";
import useAlertStore from "../../lib/store/useAlertStore";
import useBooking from "../../lib/hooks/useBooking";

const Change = (): JSX.Element => {
  const { bookingId = "" } = useParams();
  const navigate = useNavigate();
  const { openAlert, closeAlert, types } = useAlertStore();
  const { updateBooking, deleteBooking, getBooking } = useBooking();

  useLayoutEffect(() => {
    return () => closeAlert();
  }, [closeAlert]);

  const booking = getBooking(bookingId);

  const initialDateFrom = booking?.dateFrom;
  const initialDateTo = booking?.dateTo;

  const [dateFrom, setDateFrom] = useState(initialDateFrom);
  const [dateTo, setDateTo] = useState(initialDateTo);

  if (!booking) throw Error;

  const newBooking = Object.assign({}, booking, { dateFrom, dateTo });

  const handleUpdateBooking = () => {
    const result = updateBooking(newBooking);
    let message = "Your reservation was updated.";
    let type = types.success;

    if (!result) {
      message = "This date is not available. Plese select another date.";
      type = types.error;
    }

    openAlert(message, type);
  };

  const handleDeleteBooking = () => {
    const result = deleteBooking(bookingId);
    let message = "Your reservation was cancelled.";
    let type = types.success;

    if (!result) {
      message =
        "An error occourred when trying to cancel your reservation. Please try again later.";
      type = types.error;
    }

    navigate("/booked", { state: { cancelled: true } });
    openAlert(message, type);
  };

  const handleChangeFrom = (value: Dayjs | null): void => {
    if (!value) return;
    setDateFrom(value);
  };

  const handleChangeTo = (value: Dayjs | null): void => {
    if (!value) return;
    setDateTo(value);
  };

  return (
    <BookingDetails
      booking={newBooking}
      onChangeFrom={handleChangeFrom}
      onChangeTo={handleChangeTo}
    >
      <>
        <PrimaryButton onClick={handleUpdateBooking}>
          Save changes
        </PrimaryButton>
        <PrimaryButton onClick={handleDeleteBooking}>
          Cancel reservation
        </PrimaryButton>
      </>
    </BookingDetails>
  );
};

export default Change;

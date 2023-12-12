import { useLayoutEffect, useState } from "react";
import { useParams } from "react-router-dom";
import dayjs, { Dayjs } from "dayjs";
import BookingDetails from "../organisms/BookingDetails";
import PrimaryButton from "../atoms/PrimaryButton";

import useAlertStore from "../../lib/store/useAlertStore";
import useBooking from "../../lib/hooks/useBooking";
import usePlace from "../../lib/hooks/usePlace";

const Details = (): JSX.Element => {
  const { placeId = "", initialDateFrom, initialDateTo } = useParams();
  const { openAlert, closeAlert, types } = useAlertStore();
  const { addBooking } = useBooking();
  const { getPlace } = usePlace();
  const [dateFrom, setDateFrom] = useState(dayjs(initialDateFrom));
  const [dateTo, setDateTo] = useState(dayjs(initialDateTo));

  useLayoutEffect(() => {
    return () => closeAlert();
  }, [closeAlert]);

  const place = getPlace(parseInt(placeId));

  if (!place) throw Error;

  const newBooking = Object.assign({}, place, {
    dateFrom: dayjs(dateFrom),
    dateTo: dayjs(dateTo),
  });

  const handleAddBooking = () => {
    const result = addBooking(newBooking);
    let message = "Booking confirmed. Enjoy!";
    let type = types.success;

    if (!result) {
      message = "This date is not available. Plese select another date.";
      type = types.error;
    }

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
      <PrimaryButton onClick={handleAddBooking}>Reserve</PrimaryButton>
    </BookingDetails>
  );
};

export default Details;

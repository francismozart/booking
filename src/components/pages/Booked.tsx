import { useLocation } from "react-router";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import PageTitle from "../atoms/PageTitle";
import BookingCard from "../molecules/BookingCard";
import useBookingStore from "../../lib/store/useBookingStore";
import useAlertStore from "../../lib/store/useAlertStore";
import { Booking } from "../../lib/types/Booking";
import { useLayoutEffect } from "react";

const Booked = () => {
  const bookings = useBookingStore((state) => state.bookings);
  const location = useLocation();
  const { openAlert, closeAlert, types } = useAlertStore();

  useLayoutEffect(() => {
    if (location.state && location.state.cancelled) {
      const message = "Your reservation was cancelled.";
      const type = types.success;
      openAlert(message, type);
    }

    return () => closeAlert();
  }, [location?.state, openAlert, closeAlert, types.success]);

  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <PageTitle>My booked places</PageTitle>
        </Grid>

        {bookings.map((item: Booking): JSX.Element => {
          const linkUrl = `/change/${item.bookingId}`;

          return (
            <Grid item xs={12} sm={6} md={4} key={item.bookingId}>
              <BookingCard
                {...item}
                buttonLabel="Change my reservation"
                linkTo={linkUrl}
              />
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};

export default Booked;

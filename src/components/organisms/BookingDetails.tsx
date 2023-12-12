import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import dayjs, { Dayjs } from "dayjs";

import FeaturedImage from "../atoms/FeaturedImage";
import Title from "../atoms/Title";
import Description from "../atoms/Description";
import Price from "../atoms/Price";
import BookingDate from "../molecules/BookingDate";
import { BookingContentWrapper } from "../../styles/BookingDetails.styled";
import { Booking } from "../../lib/types/Booking";

interface IBookingDetails {
  booking: Booking;
  children: JSX.Element;
  onChangeFrom?: (value: Dayjs | null) => void;
  onChangeTo?: (value: Dayjs | null) => void;
}

const BookingDetails = ({
  booking,
  onChangeFrom,
  onChangeTo,
  children,
}: IBookingDetails): JSX.Element => {
  const { name, description, imgSrc, price, dateFrom, dateTo } = booking;
  const numberOfDays = dateTo.diff(dateFrom, "day");

  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <FeaturedImage imgSrc={imgSrc} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <BookingContentWrapper>
            <Stack gap={2}>
              <BookingDate
                dateFrom={dayjs(dateFrom)}
                dateTo={dayjs(dateTo)}
                onChangeFrom={onChangeFrom}
                onChangeTo={onChangeTo}
              />
              <Title>{name}</Title>
              <Description>{description}</Description>
              <Price price={price} numberOfDays={numberOfDays} />
              {children}
            </Stack>
          </BookingContentWrapper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default BookingDetails;

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import PrimaryButton from "../atoms/PrimaryButton";
import Title from "../atoms/Title";
import Price from "../atoms/Price";
import { CardContainer, SmallDate } from "../../styles/BookingCard.styled";

import { Booking } from "../../lib/types/Booking";
import { CardActions } from "@mui/material";
import { Link } from "react-router-dom";
import dayjs from "dayjs";

export interface IBookingCard extends Booking {
  buttonLabel: string;
  linkTo: string;
}

export default function BookingCard({
  placeId,
  bookingId,
  name,
  dateFrom,
  dateTo,
  imgSrc,
  price,
  buttonLabel,
  linkTo,
}: IBookingCard): JSX.Element {
  const numberOfDays = dateTo.diff(dateFrom, "day");
  const dateText = `${dayjs(dateFrom).format("MMM DD")} - ${dayjs(
    dateTo
  ).format("MMM DD")}`;

  return (
    <CardContainer>
      <Link to={linkTo}>
        <Card key={bookingId || placeId} variant={"outlined"}>
          <CardMedia sx={{ height: 300 }} image={imgSrc} />
          <CardContent>
            <Title>{name}</Title>
            <SmallDate>{dateText}</SmallDate>
            <Price price={price} numberOfDays={numberOfDays} />
          </CardContent>
          <CardActions>
            <PrimaryButton>{buttonLabel}</PrimaryButton>
          </CardActions>
        </Card>
      </Link>
    </CardContainer>
  );
}

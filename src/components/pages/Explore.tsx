import { useState } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import BookingCard from "../molecules/BookingCard";
import BookingDate from "../molecules/BookingDate";
import PageTitle from "../atoms/PageTitle";
import usePlaces from "../../lib/hooks/usePlace";
import { Place } from "../../lib/types/Place";
import { getNextDays } from "../../lib/util/date";
import dayjs, { Dayjs } from "dayjs";

const Explore = () => {
  const { getPlaces } = usePlaces();
  const places = getPlaces();

  const initialDateFrom = getNextDays(dayjs(), 1);
  const initialDateTo = getNextDays(dayjs(), 2);

  const [dateFrom, setDateFrom] = useState(initialDateFrom);
  const [dateTo, setDateTo] = useState(initialDateTo);

  const handleChangeFrom = (value: Dayjs | null): void => {
    if (!value) return;
    setDateFrom(value);
  };

  const handleChangeTo = (value: Dayjs | null): void => {
    if (!value) return;
    setDateTo(value);
  };

  return (
    <>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <PageTitle>Stay anywhere</PageTitle>

            <BookingDate
              dateFrom={dateFrom}
              dateTo={dateTo}
              onChangeFrom={handleChangeFrom}
              onChangeTo={handleChangeTo}
            />
          </Grid>

          {places.map((item: Place): JSX.Element => {
            const linkUrl = `/details/${item.placeId}/${dateFrom}/${dateTo}`;

            return (
              <Grid item xs={12} sm={6} md={4} key={item.placeId}>
                <BookingCard
                  {...item}
                  dateFrom={dateFrom}
                  dateTo={dateTo}
                  buttonLabel="See more"
                  linkTo={linkUrl}
                />
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </>
  );
};

export default Explore;

import { it, describe, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import BookingCard, { IBookingCard } from "../components/molecules/BookingCard";
import dayjs from "dayjs";

describe("BookingCard component", () => {
  it("renders", () => {
    const bookingCardProps: IBookingCard = {
      placeId: 111,
      name: "Test Place",
      dateFrom: dayjs(),
      dateTo: dayjs().add(4, "day"),
      imgSrc: "https://placehold.co/600x400",
      description: "Test description",
      price: 100,
      buttonLabel: "See more",
      linkTo: "#",
    };
    const bookingCardComponent = (
      <BrowserRouter>
        <BookingCard {...bookingCardProps} />
      </BrowserRouter>
    );

    render(bookingCardComponent);

    const bookingCardText = screen.getByText(new RegExp("See more", "i"));
    expect(bookingCardText).toBeDefined();
  });
});

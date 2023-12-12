import { it, describe, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Price from "../components/atoms/Price";

describe("Price component", () => {
  it("renders with the given price", () => {
    const price = 123;
    const numberOfDays = 4;
    const priceComponent = <Price price={price} numberOfDays={numberOfDays} />;

    render(priceComponent);

    const priceText = screen.getByText(new RegExp(price.toString(), "i"));
    expect(priceText).toBeDefined();
  });

  it("render the calculated total price", () => {
    const price = 100;
    const numberOfDays = 4;
    const totalPrice = price * numberOfDays;
    const priceComponent = <Price price={price} numberOfDays={numberOfDays} />;

    render(priceComponent);

    const totalPriceText = screen.getByText(
      new RegExp(totalPrice.toString(), "i")
    );
    expect(totalPriceText).toBeDefined();
  });
});

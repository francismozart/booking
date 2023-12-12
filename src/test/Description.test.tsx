import { it, describe, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Description from "../components/atoms/Description";

describe("Description component", () => {
  it("renders with the given description", () => {
    const description = "Lorem ipsum ...";
    const descriptionComponent = <Description>{description}</Description>;

    render(descriptionComponent);

    const descriptionText = screen.getByText(new RegExp(description, "i"));
    expect(descriptionText).toBeDefined();
  });
});

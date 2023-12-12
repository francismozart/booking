import { it, describe, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Title from "../components/atoms/Title";

describe("Title component", () => {
  it("renders with the given title", () => {
    const title = "Lorem ipsum ...";
    const titleComponent = <Title>{title}</Title>;

    render(titleComponent);

    const titleText = screen.getByText(new RegExp(title, "i"));
    expect(titleText).toBeDefined();
  });
});

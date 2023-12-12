import { it, describe, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import PageTitle from "../components/atoms/PageTitle";

describe("PageTitle component", () => {
  it("renders with the given title", () => {
    const pageTitle = "Lorem ipsum ...";
    const pageTitleComponent = <PageTitle>{pageTitle}</PageTitle>;

    render(pageTitleComponent);

    const pageTitleText = screen.getByText(new RegExp(pageTitle, "i"));
    expect(pageTitleText).toBeDefined();
  });
});

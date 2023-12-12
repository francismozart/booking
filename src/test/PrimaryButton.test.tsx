import { it, describe, expect, vi } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import PrimaryButton from "../components/atoms/PrimaryButton";

describe("PrimaryButton component", () => {
  it("renders with the given title", () => {
    const label = "Click me";
    const buttonComponent = <PrimaryButton>{label}</PrimaryButton>;

    render(buttonComponent);

    const buttonLabel = screen.getByText(new RegExp(label, "i"));
    expect(buttonLabel).toBeDefined();
  });

  it("fires onClick", () => {
    const label = "Click test";
    const mockClick = vi.fn();
    const buttonComponent = (
      <PrimaryButton onClick={mockClick}>{label}</PrimaryButton>
    );

    render(buttonComponent);

    const btnObj = screen.getByText("Click test");
    fireEvent.click(btnObj);
    expect(mockClick).toHaveBeenCalled();
  });
});

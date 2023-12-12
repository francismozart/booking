import { it, describe, expect } from "vitest";
import { render } from "@testing-library/react";
import FeaturedImage from "../components/atoms/FeaturedImage";

describe("FeaturedImage component", () => {
  it("renders with the given src", () => {
    const imgSrc = "https://placehold.co/600x400";
    const imageComponent = <FeaturedImage imgSrc={imgSrc} />;

    render(imageComponent);

    const testImage = document.querySelector("img") as HTMLImageElement;
    expect(testImage.src).toContain(imgSrc);
  });
});

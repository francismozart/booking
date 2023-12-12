import { it, describe, expect } from "vitest";
import { isNumberEmptyOrNegative, isStringEmpty } from "../lib/util/validation";

describe("isStringEmpty function", () => {
  it("should return true for empty values", () => {
    expect(isStringEmpty(null)).toBe(true);
    expect(isStringEmpty(undefined)).toBe(true);
    expect(isStringEmpty("")).toBe(true);
  });

  it("should return true for whitespace values", () => {
    expect(isStringEmpty(" ")).toBe(true);
    expect(isStringEmpty("  ")).toBe(true);
  });

  it("should return false for non empty values", () => {
    expect(isStringEmpty("aa")).toBe(false);
    expect(isStringEmpty("undefined")).toBe(false);
    expect(isStringEmpty("null")).toBe(false);
  });

  it("should return false for non empty values with spaces", () => {
    expect(isStringEmpty(" aa ")).toBe(false);
    expect(isStringEmpty("aa bb")).toBe(false);
    expect(isStringEmpty(" aa bb ")).toBe(false);
  });
});

describe("isNumberEmptyOrNegative function", () => {
  it("checks if a number is empty or negative", () => {
    expect(isNumberEmptyOrNegative(1)).toBe(false);
    expect(isNumberEmptyOrNegative(0)).toBe(false);
    expect(isNumberEmptyOrNegative()).toBe(true);
    expect(isNumberEmptyOrNegative(-1)).toBe(true);
    expect(isNumberEmptyOrNegative(-1)).toBe(true);
  });
});

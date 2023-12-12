export const isStringEmpty = (value?: string | null): boolean =>
  value === null ||
  value === undefined ||
  value === "" ||
  (value.trim && value.trim() === "") ||
  false;

export const isNumberEmptyOrNegative = (value?: number | null): boolean =>
  value === null || value === undefined || value < 0 || false;

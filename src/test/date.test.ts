import { it, describe, expect } from "vitest";
import { dateConflicts, getNextDays } from "../lib/util/date";
import dayjs from "dayjs";

describe("date util functions", () => {
  it("calculate conflicts using dateConflicts", () => {
    const dateFrom = dayjs().add(2, "day");
    const dateTo = dayjs().add(3, "day");

    expect(dateConflicts(dayjs().add(1, "day"), dateFrom, dateTo)).toBe(false);
    expect(dateConflicts(dateFrom, dateFrom, dateTo)).toBe(true);
    expect(dateConflicts(dateTo, dateFrom, dateTo)).toBe(true);
  });

  it("adds days to a given day using getNextDays", () => {
    expect(getNextDays(dayjs("12/01/2023"), 1)).toStrictEqual(
      dayjs("12/02/2023")
    );
    expect(getNextDays(dayjs("12/01/2023"), 2)).toStrictEqual(
      dayjs("12/3/2023")
    );
  });
});

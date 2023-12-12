import dayjs, { Dayjs } from "dayjs";

export const dateConflicts = (
  currentDate: Dayjs,
  dateFrom: Dayjs,
  dateTo: Dayjs
): boolean => {
  const same =
    dayjs(currentDate).isSame(dateFrom) || dayjs(currentDate).isSame(dateTo);
  const afterFrom = dayjs(currentDate).isAfter(dateFrom);
  const beforeTo = dayjs(currentDate).isBefore(dateTo);
  return same || (afterFrom && beforeTo);
};

export const getNextDays = (currentDate: dayjs.Dayjs, daysToAdd = 1) => {
  return currentDate.add(daysToAdd, "day");
};

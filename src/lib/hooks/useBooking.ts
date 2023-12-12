import useBookingStore from "../store/useBookingStore";
import { Booking } from "../types/Booking";
import { dateConflicts } from "../util/date";
import { isStringEmpty, isNumberEmptyOrNegative } from "../util/validation";

const useBooking = () => {
  const { bookings, update } = useBookingStore((state) => state);

  const getBookingsByPlaceId = (
    placeId: number | undefined
  ): Booking[] | undefined => {
    if (isNumberEmptyOrNegative(placeId)) return;

    const result: Booking[] | undefined = bookings.filter((item: Booking) => {
      return item.placeId === placeId;
    });

    return result;
  };

  const getBooking = (bookingId: string | undefined): Booking | undefined => {
    if (isStringEmpty(bookingId)) return;

    const result: Booking | undefined = bookings.find((item: Booking) => {
      return item.bookingId === bookingId;
    });

    return result;
  };

  const hasBookingConflicts = (booking: Booking): boolean => {
    const currentBookings = getBookingsByPlaceId(booking.placeId);

    const noBookingInThisPlace = !currentBookings?.length;
    if (noBookingInThisPlace) return false;

    const hasConflicts = currentBookings.some((item) => {
      if(item.bookingId === booking.bookingId) return
      
      const { dateFrom, dateTo } = item;
      return (
        dateConflicts(booking.dateFrom, dateFrom, dateTo) ||
        dateConflicts(booking.dateTo, dateFrom, dateTo)
      );
    });

    return hasConflicts;
  };

  const addBooking = (booking: Booking): boolean => {
    const hasConflicts = hasBookingConflicts(booking);
    if (hasConflicts) return false;

    const newBooking = Object.assign({}, booking, {
      bookingId: crypto.randomUUID(),
    });

    bookings.push(newBooking);
    update(bookings);
    return true;
  };

  const updateBooking = (booking: Booking): boolean => {
    const hasConflicts = hasBookingConflicts(booking);
    if (hasConflicts) return false;

    const newBookings = bookings.map((item: Booking) => {
      if (item.bookingId === booking.bookingId) {
        const newItem = Object.assign({}, item, booking);
        return newItem;
      } else {
        return item;
      }
    });

    update(newBookings);
    return true;
  };

  const deleteBooking = (bookingId: string): boolean => {
    let indexToRemove = null;

    const result = bookings.find((item: Booking) => {
      if (item.bookingId === bookingId) {
        indexToRemove = bookings.indexOf(item);
      }
      return item.bookingId === bookingId;
    });

    if (!result || indexToRemove === null) return false;

    bookings.splice(indexToRemove, 1);
    update(bookings);
    return true;
  };

  return { addBooking, updateBooking, deleteBooking, getBooking };
};

export default useBooking;

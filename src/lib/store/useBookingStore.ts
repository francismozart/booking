import { create } from "zustand";
import { Booking } from "../types/Booking";

interface IBookingState {
  bookings: Booking[];
  update: (bookings: Booking[]) => void;
}

const useBookingStore = create<IBookingState>()((set) => ({
  bookings: [],
  update: (bookings) => set(() => ({ bookings })),
}));

export default useBookingStore;

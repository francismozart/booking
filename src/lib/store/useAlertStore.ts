import { create } from "zustand";
import { AlertColor } from "@mui/material/Alert";

interface IAlertTypes {
  [key: string]: AlertColor;
}

interface IAlert {
  text: string;
  type: AlertColor;
  types: IAlertTypes;
  isOpen: boolean;
  openAlert: (text: string, type: AlertColor) => void;
  closeAlert: () => void;
}

const DEFAULT_ALERT_TYPE = "success";

const useAlertStore = create<IAlert>()((set) => ({
  text: "",
  type: DEFAULT_ALERT_TYPE,
  types: { success: "success", error: "error" },
  isOpen: false,
  openAlert: (text: string, type: AlertColor) =>
    set(() => ({ text, type, isOpen: true })),
  closeAlert: () => set(() => ({ isOpen: false })),
}));

export default useAlertStore;

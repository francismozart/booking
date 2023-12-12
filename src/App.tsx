import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import Router from "./Router";

export default function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Router />
    </LocalizationProvider>
  );
}

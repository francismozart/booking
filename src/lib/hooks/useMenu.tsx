import SearchIcon from "@mui/icons-material/Search";
import RestoreIcon from "@mui/icons-material/Restore";
import { MenuItem } from "../types/MenuItem";

const useMenu = () => {
  const menuItems: MenuItem[] = [
    {
      path: "/explore",
      label: "Explore",
      icon: <SearchIcon />,
    },
    {
      path: "/booked",
      label: "Booked",
      icon: <RestoreIcon />,
    },
  ];

  const getMenuItems = (): MenuItem[] => menuItems;

  return {
    getMenuItems,
  };
};

export default useMenu;

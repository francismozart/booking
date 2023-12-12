import { useLayoutEffect, useRef, useState } from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { NavigationStyled } from "../../styles/Navigation.styled";
import { useNavigate } from "react-router";
import { MenuItem } from "../../lib/types/MenuItem";

export interface INavigation {
  menuItems: MenuItem[];
}

const Navigation = ({ menuItems }: INavigation) => {
  const [value, setValue] = useState(0);
  const [isScrollingDown, setIsScrollingDown] = useState(true);
  const navigate = useNavigate();
  const scrollY = useRef<number>(0);

  const handleScroll = () => {
    if (window.scrollY > scrollY.current) {
      setIsScrollingDown(false);
      scrollY.current = window.scrollY;
      return;
    }

    scrollY.current = window.scrollY;
    setIsScrollingDown(true);
  };

  useLayoutEffect(() => {
    document.addEventListener("scroll", handleScroll);
    return () => document.removeEventListener("scroll", handleScroll);
  }, []);

  const classes = isScrollingDown ? "" : "hidden";

  return (
    <NavigationStyled elevation={2} className={classes}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        {menuItems.map((item: MenuItem) => {
          return (
            <BottomNavigationAction
              key={crypto.randomUUID()}
              onClick={() => navigate(item.path)}
              label={item.label}
              icon={item.icon}
            />
          );
        })}
      </BottomNavigation>
    </NavigationStyled>
  );
};

export default Navigation;

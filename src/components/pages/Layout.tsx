import Navigation from "../molecules/Navigation";
import { Outlet } from "react-router-dom";
import AnimatedAlert from "../molecules/AnimatedAlert";
import GlobalStyle from "../../styles/GlobalStyle.styled";
import useMenu from "../../lib/hooks/useMenu";

const Layout = () => {
  const { getMenuItems } = useMenu();
  const menuItems = getMenuItems();

  return (
    <>
      <GlobalStyle />
      <Navigation menuItems={menuItems} />
      <AnimatedAlert />
      <Outlet />
    </>
  );
};

export default Layout;

import { it, describe, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Navigation from "../components/molecules/Navigation";
import AccountCircle from "@mui/icons-material/AccountCircle";
import AccessAlarm from "@mui/icons-material/AccessAlarm";
import { MenuItem } from "../lib/types/MenuItem";
import { BrowserRouter } from "react-router-dom";

describe("Navigation component", () => {
  it("renders with the given items", () => {
    const menuItems: MenuItem[] = [
      {
        path: "/test1",
        label: "Test 1",
        icon: <AccountCircle />,
      },
      {
        path: "/test 2",
        label: "Test 2",
        icon: <AccessAlarm />,
      },
    ];
    const navigationComponent = (
      <BrowserRouter>
        <Navigation menuItems={menuItems} />
      </BrowserRouter>
    );

    render(navigationComponent);

    const navItemText = screen.getByText(new RegExp("Test 1", "i"));
    expect(navItemText).toBeDefined();
  });
});

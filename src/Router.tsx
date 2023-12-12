import Explore from "./components/pages/Explore";
import Booked from "./components/pages/Booked";
import Details from "./components/pages/Details";
import Layout from "./components/pages/Layout";
import Change from "./components/pages/Change";
import ErrorBoundary from "./components/pages/ErrorBoundary";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        index: true,
        element: <Explore />,
      },
      {
        path: "/explore",
        element: <Explore />,
      },
      {
        path: "/booked",
        element: <Booked />,
      },
      {
        path: "/details/:placeId/:initialDateFrom/:initialDateTo",
        element: <Details />,
      },
      {
        path: "/change/:bookingId",
        element: <Change />,
      },
    ],
  },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;

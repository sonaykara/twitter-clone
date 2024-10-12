import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Explore from "../pages/expolore/Explore";
import Notifications from "../pages/notifications/Notifications";
import AppLayout from "../layouts/App/AppLayout";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },

      {
        path: "explore",
        element: <Explore />,
      },

      {
        path: "notifications",
        element: <Notifications />,
      },
    ],
  },
]);

export default routes;

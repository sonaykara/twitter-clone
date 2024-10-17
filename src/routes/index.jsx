import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import Explore from "../pages/expolore/Explore";
import Notifications from "../pages/notifications/Notifications";
import AppLayout from "../layouts/main/AppLayout";
import Messages from "../pages/messages/index";
import Lists from "../pages/lists/index";
import Bookmarks from "../pages/bookmarks/index";
import Profile from "../pages/profile/index";


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
      {
				path: 'messages',
				element: <Messages />
			},
			{
				path: 'lists',
				element: <Lists />
			},
			{
				path: 'bookmarks',
				element: <Bookmarks />
			},
			{
				path: ':slug',
				element: <Profile />
			},
    ],
  },
]);

export default routes;

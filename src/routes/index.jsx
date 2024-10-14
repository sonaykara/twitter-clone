import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Explore from "../pages/expolore/Explore";
import Notifications from "../pages/notifications/Notifications";
import AppLayout from "../layouts/App/AppLayout";
import Messages from "../pages/messages";
import Lists from "../pages/lists";
import Bookmarks from "../pages/Bookmarks";
import Profile from "../pages/profile";


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

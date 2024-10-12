import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Explore from "../pages/expolore/Explore";
import Notifications from "../pages/notifications/Notifications";

const routes = createBrowserRouter ([
    {
        path: "/",
        element: <Home/>
    }, 

    {
        path: "/explore",
        element: <Explore/>
    },

    {
        path: "/notifications",
        element: <Notifications/>
    }

])

export default routes
import { Outlet } from "react-router-dom";
import SideBar from "../sidebar/SideBar";
import RightBar from "../rightbar/SideBar";

const AppLayout = () => {
  return (
    <div className="w-[1265px] mx-auto flex min-h-screen">
      <SideBar />
      <main className="flex-1 flex gap-[30px]">
        <main className="flex-1 max-w[600px] border-x border-[#2f3336] ">
          <Outlet />
        </main>
        <RightBar />
      </main>
    </div>
  );
};

export default AppLayout;

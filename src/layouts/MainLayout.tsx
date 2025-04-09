import { Outlet } from "react-router-dom";
import Header from "../components/layout/Header/Header";
import Sidebar from "../components/layout/Sidebar/Sidebar";

const MainLayout = () => {
  return (
    <div className="h-screen flex flex-col">
      <Header></Header>
      <div className="h-full bg-white flex">
        <Sidebar></Sidebar>
        <div className="flex flex-col mx-auto">
          <div className="flex px-[24px] box-border justify-stretch items-stretch w-[1120px] mx-auto">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;

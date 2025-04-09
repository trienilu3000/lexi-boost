import { Outlet } from "react-router-dom";
import Header from "../components/layout/Header/Header";
import Sidebar from "../components/layout/Sidebar/Sidebar";
import { Suspense } from "react";
import LXProgress from "../components/ui/Progress/Progress";

const MainLayout = () => {
  return (
    <div className="h-screen flex flex-col">
      <Header></Header>
      <div className="h-full bg-white flex">
        <Sidebar></Sidebar>
        <div className="flex flex-col mx-auto">
          <div className="flex px-[24px] box-border justify-stretch items-stretch w-[1120px] mx-auto">
            <Suspense
              fallback={
                <LXProgress
                  auto
                  strokeColor="#FF4500"
                  size={"small"}
                ></LXProgress>
              }
            >
              <Outlet />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;

import { useRoutes } from "react-router-dom";
import AppRoutes from "./AppRoutes";
import { Suspense } from "react";

const Router = () => {
  const routes = useRoutes(AppRoutes);
  return <Suspense fallback={<div>Đang tải trang...</div>}>{routes}</Suspense>;
};

export default Router;

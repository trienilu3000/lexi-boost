import { lazy } from "react";
import { Navigate, RouteObject } from "react-router-dom";

const Dashboard = lazy(() => import("../pages/Dashboard/home"));

const isAuthenticated = () => !!sessionStorage.getItem("token"); // Kiểm tra đăng nhập

export const privateRoutes: RouteObject[] = [
  {
    path: "/dashboard",
    element: isAuthenticated() ? <Dashboard /> : <Navigate to="/login" />,
  },
];

import { lazy } from "react";
import { RouteObject } from "react-router-dom";
import App from "../App";

const Home = lazy(() => import("../pages/Dashboard/home"));
const Login = lazy(
  () => import("../pages/auth/components/Login/components/Login")
);
const Register = lazy(
  () => import("../pages/auth/components/Signup/components/Signup")
);

export const publicRoutes: RouteObject[] = [
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <Home /> },
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
    ],
  },
];

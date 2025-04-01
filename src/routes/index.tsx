import {
  BrowserRouter as Router,
  Navigate,
  RouteObject,
} from "react-router-dom";
import { publicRoutes } from "./PublicRoutes";
import { privateRoutes } from "./PrivateRoutes";

const AppRouter: RouteObject[] = [
  ...publicRoutes,
  ...privateRoutes,
  { path: "*", element: <Navigate to="/" /> },
];

export default AppRouter;

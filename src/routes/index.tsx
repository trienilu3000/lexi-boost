import { useRoutes } from "react-router-dom";
import AppRoutes from "./AppRoutes";

const Router = () => {
  const routes = useRoutes(AppRoutes);
  return routes;
};

export default Router;

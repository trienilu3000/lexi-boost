import MainLayout from "../layouts/MainLayout";
import { mainRoutes } from "./modules/main.routes";

const AppRoutes = [
  {
    path: "/",
    element: <MainLayout />,
    children: [...mainRoutes],
  },
];

export default AppRoutes;

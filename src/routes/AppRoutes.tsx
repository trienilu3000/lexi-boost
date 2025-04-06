import MainLayout from "../layouts/MainLayout";
import learnRoutes from "./modules/learn.routes";

const AppRoutes = [
  {
    path: "/",
    element: <MainLayout />,
    children: [...learnRoutes],
  },
];

export default AppRoutes;

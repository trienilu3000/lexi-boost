import { lazy } from "react";

const LearnPage = lazy(() => import("../../pages/Learn/components/LearnPage"));

const learnRoutes = [
  {
    path: "/",
    element: <LearnPage />,
    name: "Learn",
  },
];

export default learnRoutes;

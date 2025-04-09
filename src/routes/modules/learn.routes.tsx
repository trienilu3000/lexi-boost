import { lazy } from "react";
import DailyChallanger from "../../pages/DailyChallenger/components/DailyChallenger";

const LearnPage = lazy(() => import("../../pages/Learn/components/LearnPage"));

const learnRoutes = [
  {
    path: "/",
    element: <LearnPage />,
    name: "Learn",
  },
  {
    path: "/learn",
    element: <LearnPage />,
    name: "Learn",
  },
  {
    path: "/challenge",
    element: <DailyChallanger />,
    name: "Daily Challanger",
  },
];

export default learnRoutes;

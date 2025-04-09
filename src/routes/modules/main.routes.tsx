import { lazy } from "react";

const LearnPage = lazy(() => import("../../pages/Learn/components/LearnPage"));

const DailyChallanger = lazy(
  () => import("../../pages/DailyChallenger/components/DailyChallenger")
);
const PvPQuiz = lazy(() => import("../../pages/PvPQuiz/components/PvPQuiz"));
const Pronounce = lazy(
  () => import("../../pages/Pronounce/components/Pronounce")
);
const Ranking = lazy(() => import("../../pages/Ranking/components/Ranking"));

const learnRoutes = [
  {
    path: "/learn",
    element: <LearnPage />,
    name: "Learn",
  },
];

const challengeRoutes = [
  {
    path: "/challenge",
    element: <DailyChallanger />,
    name: "Daily Challenger",
  },
];

const quizRoutes = [
  {
    path: "/quiz",
    element: <PvPQuiz />,
    name: "PvP Quiz",
  },
];

const pronounceRoutes = [
  {
    path: "/pronounce",
    element: <Pronounce />,
    name: "Pronounce",
  },
];

const RankRoutes = [
  {
    path: "/rank",
    element: <Ranking />,
    name: "Ranking",
  },
];

export const mainRoutes = [
  {
    path: "/",
    element: <LearnPage />,
    name: "Learn",
  },
  ...learnRoutes,
  ...challengeRoutes,
  ...quizRoutes,
  ...pronounceRoutes,
  ...RankRoutes,
];

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";

import Home from "../pages/Dashboard/home";
import AuthPage from "../pages/auth/AuthPage";
import Vocabulary from "../pages/Vocabulary/components/Vocabulary";
import Listening from "../pages/Listening/components/Listening";
import Reading from "../pages/Reading/components/Reading";
import Lessons from "../pages/Lessons/components/Lessons";
import Grammar from "../pages/Grammar/components/Grammar";

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<AuthPage type="login" />} />
        <Route path="/register" element={<AuthPage type="signup" />} />
        <Route path="/vocabulary" element={<Vocabulary />} />
        <Route path="/listening" element={<Listening />} />
        <Route path="/reading" element={<Reading />} />
        <Route path="/lessons" element={<Lessons />} />
        <Route path="/grammar" element={<Grammar />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;

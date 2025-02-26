import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";

import Grammar from "../features/Grammar/components/Grammar";
import Vocabulary from "../features/Vocabulary/components/Vocabulary";
import Listening from "../features/Listening/components/Listening";
import Reading from "../features/Reading/components/Reading";
import Lessons from "../features/Lessons/components/Lessons";
import Home from "../pages/dashboard/home";
import AuthPage from "../pages/auth/AuthPage";

const AppRouter: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<AuthPage type="login" />} />
                <Route path="/register" element={<AuthPage type="register" />} />
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
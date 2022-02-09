import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./components/home/home";
import Dashboard from "./components/classroom/dashboard";
import Forum from "./components/discussion/discForum";
import QuestionWithAnswer from "./components/discussion/queWithAns";
import QuestionWithAllAnswers from "./components/discussion/queWithAllAns.jsx";
import SubjectContainer from "./components/discussion/subject";
import Login from "./components/home/login";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/question" element={<Forum />} />
      <Route path="/classroom" element={<Dashboard />} />
      <Route path="/subjects" element={<SubjectContainer />} />
      <Route path="/popularquestion" element={<Forum />} />
      <Route path="/question/:id" element={<QuestionWithAnswer />} />
      <Route
        path="/question/allans/:que_id"
        element={<QuestionWithAllAnswers />}
      />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default AppRouter;

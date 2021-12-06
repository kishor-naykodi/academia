import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./components/home/home";
import Forum from "./components/discussion/discForum";
import QuestionWithAnswer from "./components/discussion/queWithAns";
import QuestionWithAllAnswers from "./components/discussion/queWithAllAns.jsx";
import SubjectContainer from "./components/discussion/subject";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/question" element={<Forum />} />
      <Route path="/subjects" element={<SubjectContainer />} />
      <Route path="/popularquestion" element={<Forum />} />
      <Route path="/question/:id" element={<QuestionWithAnswer />} />
      <Route
        path="/question/allans/:que_id"
        element={<QuestionWithAllAnswers />}
      />
    </Routes>
  );
};

export default AppRouter;

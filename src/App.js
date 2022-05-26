import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//import components for routing
import Home from "./components/home/home";
import Dashboard from "./components/dashboard/dashboard";
import Forum from "./components/discussion/discForum";
import QuestionWithAnswer from "./components/discussion/queWithAns";
import QuestionWithAllAnswers from "./components/discussion/queWithAllAns.jsx";
import SubjectContainer from "./components/discussion/subject";
import Login from "./components/home/login";
import Logout from "./components/home/logout";
import Register from "./components/home/register";
import auth from "./services/authService";
import Classroom from "./components/dashboard/classroom/classroom";
import CreateClass from "./components/dashboard/classroom/create_class";
import JoinClass from "./components/dashboard/classroom/join_class";
import Classwork from "./components/dashboard/classroom/class_manage/classwork";
import Stream from "./components/dashboard/classroom/class_manage/stream";
import People from "./components/dashboard/classroom/class_manage/people";
import Marks from "./components/dashboard/classroom/class_manage/marks";
import Schedule from "./components/dashboard/schedule/sch_home";

//css file imports
import "./css/normalize.css";
class App extends React.Component {
  state = {};

  componentDidMount() {
    const user = auth.getCurrentUser();
    this.setState({ user });
  }

  render() {
    const { user } = this.state;
    return (
      <React.Fragment>
        <Router>
          <Routes>
            <Route path="/" element={<Home user={user} />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/classroom" element={<Classroom />} />
            <Route path="/question" element={<Forum />} />
            <Route path="/popularquestion" element={<Forum />} />
            <Route path="/question/:id" element={<QuestionWithAnswer />} />
            <Route
              path="/question/allans/:que_id"
              element={<QuestionWithAllAnswers />}
            />
            <Route path="/subjects" element={<SubjectContainer />} />
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/register" element={<Register />} />
            <Route path="/classroom/create" element={<CreateClass />} />
            <Route path="/classroom/join" element={<JoinClass />} />
            <Route path="/classroom/stream/:_class" element={<Stream />} />
            <Route path="/classroom/work/:_class" element={<Classwork />} />
            <Route path="/classroom/people/:_class" element={<People />} />
            <Route path="/classroom/marks/:_class" element={<Marks />} />
            <Route path="/schedule" element={<Schedule />} />
          </Routes>
        </Router>
      </React.Fragment>
    );
  }
}
export default App;

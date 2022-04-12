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
          </Routes>
        </Router>
      </React.Fragment>
    );
  }
}
export default App;

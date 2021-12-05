import React from "react";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import "./css/App.css";
import "./css/normalize.css";
import "./css/discussion.css"
import Questions from "./pages/questionsPage";
import QuestionWithAnswer from "./pages/questionWithAnsPage";
import QuestionWithAllAnswers from "./pages/questionWithAllAnsPage";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from "./pages/homePage";
import SubjectContainer from "./components/Discussion/categorySubject/subject";





class App extends React.Component {
  render() {
    return (
      
      <React.Fragment>
        <Router>
        <header>
          <Navbar />
        </header>
        <Routes>
        <Route path="/" exact element={<Home/>}/>
        <Route path="/question" exact element={<Questions/>}/>
        <Route path="/subjects" exatct element={<SubjectContainer/>} />
        <Route path="/popularquestion" exact element={<Questions/>}/>
        <Route path="/question/:id" exact element={<QuestionWithAnswer/>}/>
        <Route path="/question/allans/:que_id" exact element={<QuestionWithAllAnswers/>}/>
        </Routes>
        <footer>
          <Footer />
        </footer>
        </Router>
      </React.Fragment>
          

        
          



        
        
        


        


    );
  }
}
export default App;

import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRouter from "./AppRouter";
import Navbar from "./components/home/navbar";
import Footer from "./components/home/footer";

//css file imports
import "./css/App.css";
import "./css/normalize.css";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <header>
            <Navbar />
          </header>
          <AppRouter />
          <footer>
            <Footer />
          </footer>
        </Router>
      </React.Fragment>
    );
  }
}
export default App;

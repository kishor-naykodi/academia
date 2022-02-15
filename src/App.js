import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRouter from "./AppRouter";

//css file imports
import "./css/normalize.css";
class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <AppRouter />
        </Router>
      </React.Fragment>
    );
  }
}
export default App;

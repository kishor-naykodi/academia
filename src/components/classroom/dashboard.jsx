import React, { Component } from "react";
import Sidenav from "./sidenav";
import Header from "./header";
import Main from "./main";

import "../../css/classroom.css";
class Dashboard extends Component {
  

  render() {
    return (
      // Simple dashboard grid layout
      <div className="grid-container">
        <Header />
        <Sidenav />
        <Main />
      </div>
    );
  }
}

export default Dashboard;

import React, { Component } from "react";
import Sidenav from "./profile/sidenav";
import Header from "./profile/header";
import DashMain from "./profile/dashMain";

import "../../css/classroom.css";
class Dashboard extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="grid-container">
          <Header />
          <DashMain />
        </div>
        <Sidenav />
      </React.Fragment>
    );
  }
}

export default Dashboard;

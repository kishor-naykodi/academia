import React, { Component } from "react";
import Sidenav from "./sidenav";
import Header from "./header";
import DashMain from "./dashMain";

import "../../css/classroom.css";
class Dashboard extends Component {
  render() {
    return (
      <>
        <div className="grid-container">
          <Header />

          <DashMain />
        </div>
        <Sidenav />
      </>
    );
  }
}

export default Dashboard;

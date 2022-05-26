import React from "react";
import ClassMain from "./classMain";
import Sidenav from "../profile/sidenav";
import ClassNav from "./classNav";

const Classroom = (props) => {
  return (
    <React.Fragment>
      <div className="grid-container">
        <ClassNav />
        <ClassMain />
      </div>
      <Sidenav />
    </React.Fragment>
  );
};

export default Classroom;

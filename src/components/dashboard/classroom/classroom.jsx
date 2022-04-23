import React from "react";
import ClassMain from "./classMain";
import Header from "../header";
import Sidenav from "../sidenav";
import ClassNav from "./classNav";

const Classroom = (props) => {
  return (
    <>
      <div className="grid-container">
        <Header />
        <div>
          <ClassNav />
          <ClassMain />
        </div>
      </div>
      <Sidenav />
    </>
  );
};

export default Classroom;

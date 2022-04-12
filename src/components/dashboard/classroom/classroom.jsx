import React from "react";
import ClassMain from "./classMain";
import Header from "../header";
import Sidenav from "../sidenav";

const Classroom = (props) => {
  return (
    <>
      <div className="grid-container">
        <Header />

        <ClassMain />
      </div>
      <Sidenav />
    </>
  );
};

export default Classroom;

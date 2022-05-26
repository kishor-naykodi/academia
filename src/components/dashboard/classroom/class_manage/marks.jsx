import React from "react";
import { useLocation } from "react-router-dom";
import ClassNav from "../classNav";
import Sidenav from "../../profile/sidenav";

export default function Marks() {
  const _class = useLocation().state.classroom;

  return (
    <React.Fragment>
      <ClassNav {..._class} />;
      <Sidenav />
    </React.Fragment>
  );
}

import React, { useState } from "react";
import Sidenav from "../../profile/sidenav";
import { useLocation } from "react-router-dom";
import ClassNav from "../classNav";
import { MdOutlineAdd, MdCalendarToday, MdAddToDrive } from "react-icons/md";
import { Link } from "react-router-dom";
import AssignWork from "./assignWork";

export default function Classwork() {
  const [showForm, setShowForm] = useState(false);
  const _class = useLocation().state.classroom;

  const handleCreateWork = () => {
    setShowForm(!showForm);
  };

  return (
    <React.Fragment>
      <ClassNav {..._class} />
      {!showForm && (
        <div className="classwork-container">
          <aside className="classwork__sidebar"></aside>
          <main className="classwork__main">
            <div className="classwork__content">
              <button className="create-work" onClick={handleCreateWork}>
                <div className="create-work__btn">
                  <MdOutlineAdd className="create-work__icon" />
                  <div className="create-work__txt">Create</div>
                </div>
              </button>
              <div className="class__links">
                <div className="class__links-item">
                  <Link to="#" className="class-navigate">
                    <MdCalendarToday className="nav__icon" />
                    <span>Classroom calendar</span>
                  </Link>
                </div>
                <div className="class__links-item">
                  <Link to="#" className="class-navigate">
                    <MdAddToDrive className="nav__icon" />
                    <span>Class drive folder</span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="partition"></div>
            <div className="classwork__info">
              <p className="tLDEHd">This is where you'll assign work</p>
              <p className="tLDEHd">
                You can add assignments and other work for the class, then
                organise it into topics
              </p>
            </div>
          </main>
        </div>
      )}
      {showForm && <AssignWork _class={_class} />}
      <Sidenav />
    </React.Fragment>
  );
}

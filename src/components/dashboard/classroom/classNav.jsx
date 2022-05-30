import React, { useState } from "react";
import { MdOutlineAdd, MdMenu } from "react-icons/md";
import { Link } from "react-router-dom";
import { toggleSidenav } from "../../common/utilFunc";
import Account from "../../common/account";
import auth, { getCurrentUser } from "../../../services/authService";

export default function ClassNav(props) {
  const [showOptions, setShowOptions] = useState(false);

  function handleShowOptions() {
    setShowOptions(!showOptions);
  }

  function handleActive(e) {
    e.target.classList.toggle("navigate-active");
  }

  return (
    <nav className="class__nav">
      <div className="nav-align">
        <div className="nav__start">
          <div className="brand-wrapper">
            <div className="md-menu" onClick={toggleSidenav}>
              <MdMenu id="nav__toggler" className="class__icon" />
            </div>
            <div className="Hwv4mb">
              <Link to="/classroom" className="Hwv4mb">
                <span className="class-title">{props.classname}</span>
                <span className="class-section">{props.section}</span>
              </Link>
            </div>
          </div>
        </div>
        {props.classname && (
          <div className="nav__center">
            <div className="xHPsid">
              <div className="navigate-wrapper">
                <Link
                  className="navigate EZrbnd 1"
                  onClick={handleActive}
                  to={{
                    pathname: `/classroom/stream/${props.code}`,
                  }}
                  state={{ classroom: props }}
                >
                  Stream
                </Link>
              </div>
              {props.teachers.includes(getCurrentUser()._id) && (
                <div className="navigate-wrapper">
                  <Link
                    className="navigate EZrbnd 2"
                    onClick={handleActive}
                    to={{
                      pathname: `/classroom/work/${props.code}`,
                    }}
                    state={{ classroom: props }}
                  >
                    Classwork
                  </Link>
                </div>
              )}
              <div className="navigate-wrapper">
                <Link
                  className="navigate EZrbnd 3"
                  onClick={handleActive}
                  to={{
                    pathname: `/classroom/people/${props.code}`,
                  }}
                  state={{ classroom: props }}
                >
                  People
                </Link>
              </div>
              {props.teachers.includes(getCurrentUser()._id) && (
                <div className="navigate-wrapper">
                  <Link
                    className="navigate EZrbnd 4"
                    onClick={handleActive}
                    to={{
                      pathname: `/classroom/marks/${props.code}`,
                    }}
                    state={{ classroom: props }}
                  >
                    Marks
                  </Link>
                </div>
              )}
            </div>
          </div>
        )}

        <div className="nav__end">
          <MdOutlineAdd
            id="add-class"
            className="class__icon"
            onClick={handleShowOptions}
          />
          {showOptions && (
            <div className="create_new">
              <ul className="create__list">
                <li>
                  <Link className="class-link" to="/classroom/create">
                    Create Class
                  </Link>
                </li>
                <li>
                  <Link className="class-link" to="/classroom/join">
                    Join Class
                  </Link>
                </li>
              </ul>
            </div>
          )}
          <Account className="dash-account" user={auth.getCurrentUser()} />
        </div>
      </div>
    </nav>
  );
}

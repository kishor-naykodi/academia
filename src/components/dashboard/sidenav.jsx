import React from "react";
import "../../css/classroom.css";
import { toggleSidenav } from "../common/utilFunc";
import {
  FaTachometerAlt,
  FaBook,
  FaBookmark,
  FaCommentAlt,
  FaCalendarAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";

class Sidenav extends React.Component {
  render() {
    return (
      <section className="nav_container">
        <div className="menu">
          <aside className="sidenav">
            <div className="sidenav__heading">
              <Link to="/" className="sidenav__title">
                <img
                  className="sidenav__logo"
                  src="images/logo.webp"
                  alt="logo"
                />
                <span className="sidenav__name fw-bold">Academia</span>
              </Link>
            </div>
            <ul className="sidenav__list">
              <li className="sidenav__list-item">
                <Link to="/dashboard">
                  <FaTachometerAlt className="sidenav__icon" />
                  Dashboard
                </Link>
              </li>
              <li className="sidenav__list-item">
                <Link to="/classroom">
                  <FaBook className="sidenav__icon" />
                  Classroom
                </Link>
              </li>
              <li className="sidenav__list-item">
                <Link to="/resources">
                  <FaBookmark className="sidenav__icon" />
                  Resources
                </Link>
              </li>
              <li className="sidenav__list-item">
                <Link to="/question">
                  <FaCommentAlt className="sidenav__icon" />
                  Chat
                </Link>
              </li>
              <li className="sidenav__list-item">
                <Link to="/schedule">
                  <FaCalendarAlt className="sidenav__icon" />
                  Schedule
                </Link>
              </li>
            </ul>
          </aside>
        </div>
        <div className="sidenav-toggler" onClick={toggleSidenav}></div>
      </section>
    );
  }
}

export default Sidenav;

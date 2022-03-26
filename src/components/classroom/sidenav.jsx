import React from "react";
import "../../css/classroom.css";
import {
  FaTachometerAlt,
  FaBook,
  FaBookmark,
  FaCommentAlt,
  FaCalendarAlt,
} from "react-icons/fa";

class Sidenav extends React.Component {
  render() {
    return (
      <React.Fragment>
        <aside className="sidenav">
          <div className="sidenav_heading">
            <a href="/" className="sidenav_title">
              <img className="sidenav_logo" src="images/logo.webp" alt="logo" />
              <span className="sidenav_name fw-bold">Academia</span>
            </a>
          </div>
          <ul className="sidenav__list">
            <li className="sidenav__list-item">
              <a href="/classroom">
                <FaTachometerAlt className="sidenav__icon" />
                Dashboard
              </a>
            </li>
            <li className="sidenav__list-item">
              <a href="/courses">
                <FaBook className="sidenav__icon" />
                Course
              </a>
            </li>
            <li className="sidenav__list-item">
              <a href="/resources">
                <FaBookmark className="sidenav__icon" />
                Resources
              </a>
            </li>
            <li className="sidenav__list-item">
              <a href="/question">
                <FaCommentAlt className="sidenav__icon" />
                Chat
              </a>
            </li>
            <li className="sidenav__list-item">
              <a href="/schedule">
                <FaCalendarAlt className="sidenav__icon" />
                Schedule
              </a>
            </li>
          </ul>
        </aside>
      </React.Fragment>
    );
  }
}

export default Sidenav;

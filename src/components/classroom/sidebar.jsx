import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../css/classroom.css";

class Sidebar extends React.Component {
  render() {
    return (
      <React.Fragment>
        <aside className="sidebar d-flex flex-column flex-shrink-0 p-3 text-dark bg-light">
          <a
            href="/"
            className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none"
          >
            <img className="class_logo" src="images/logo.webp" alt="logo" />
            <span className="class_name fw-bold">Academia</span>
          </a>
          <hr />
          <ul className="nav nav-pills flex-column align-items-start mb-auto bg-light fw-bolder">
            <li className="nav-item mb-3">
              <a href="/" className="nav-link text-dark" aria-current="page">
                <i class="fas fa-home mx-5"></i>
                Home
              </a>
            </li>
            <li className="nav-item mb-3">
              <a
                href="/classroom"
                className="nav-link active"
                aria-current="page"
              >
                <i class="fas fa-tachometer-alt mx-5"></i>
                Dashboard
              </a>
            </li>
            <li className="mb-3">
              <a href="/Courses" className="nav-link text-dark">
                <i class="fas fa-book mx-5"></i>
                Course
              </a>
            </li>
            <li className="mb-3">
              <a href="/resources" className="nav-link text-dark">
                <i class="far fa-bookmark mx-5"></i>
                Resources
              </a>
            </li>
            <li className="mb-3">
              <a href="/chat" className="nav-link text-dark">
                <i class="fas fa-book mx-5"></i>
                Chat
              </a>
            </li>
            <li className="mb-3">
              <a href="/schedule" className="nav-link text-dark">
                <i class="far fa-calendar-alt mx-5"></i>
                Schedule
              </a>
            </li>
          </ul>
          <hr />
          <div className="dropdown">
            <a
              href="/profile"
              className="d-flex align-items-center text-dark text-decoration-none dropdown-toggle"
              id="dropdownUser1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <img
                src="https://github.com/mdo.png"
                alt=""
                className="rounded-circle me-2"
              />
              <strong>mdo</strong>
            </a>
            <ul
              className="dropdown-menu dropdown-menu-dark text-small shadow"
              aria-labelledby="dropdownUser1"
            >
              <li>
                <a className="dropdown-item" href="#">
                  Settings
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Profile
                </a>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <a className="dropdown-item" href="/">
                  Sign out
                </a>
              </li>
            </ul>
          </div>
        </aside>
      </React.Fragment>
    );
  }
}

export default Sidebar;

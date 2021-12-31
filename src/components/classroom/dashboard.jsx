import React from "react";
import Sidebar from "./sidebar";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../css/classroom.css";
import { DoughNut } from "./doughnut";
import { LineChart } from "./linechart";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
class Dashboard extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="class_main">
          <div className="row">
            <div className="col">
              <Sidebar />
            </div>
            <div className="col-7">
              <div className="row">
                <div className="col">
                  <div className="dash_title p-5 mb-4">
                    <div className="container-fluid">
                      <h1 className="display-5 fw-bold text-white">
                        Hi UserName
                      </h1>
                      <p className="col-md-8 fs-4 text-white">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Eveniet atque aperiam suscipit, provident inventore
                        officiis?
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row align-items-md-stretch">
                <div className="col-md-5">
                  <div className="learn_time p-5 bg-light">
                    <h2 className="fs-3 fw-bolder">Learning Progress.</h2>
                    <DoughNut className="doughnut" responsive="false" />
                  </div>
                </div>
                <div className="col-md-7">
                  <div className="activity h-100 p-5 bg-light border">
                    <h2 className="fs-3 fw-bolder">My Activity</h2>
                    <LineChart />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="box_style my-3 p-3 bg-body shadow-sm">
                  <h6 className="border-bottom pb-2 mb-0 fw-bold fs-2">
                    My Courses
                  </h6>
                  <div className="d-flex text-muted pt-3">
                    <svg
                      className="bd-placeholder-img flex-shrink-0 me-2 rounded"
                      width="32"
                      height="32"
                      xmlns="http://www.w3.org/2000/svg"
                      role="img"
                      aria-label="Placeholder: 32x32"
                      preserveAspectRatio="xMidYMid slice"
                      focusable="false"
                    >
                      <title>Placeholder</title>
                      <rect width="100%" height="100%" fill="#007bff" />
                      <text x="50%" y="50%" fill="#007bff" dy=".3em">
                        32x32
                      </text>
                    </svg>

                    <p className="pb-3 mb-0 small lh-sm border-bottom">
                      <strong className="d-block text-gray-dark">
                        @python
                      </strong>
                      Some representative placeholder content, with some
                      information about this user. Imagine this being some sort
                      of status update, perhaps?
                    </p>
                  </div>
                  <div className="d-flex text-muted pt-3">
                    <svg
                      className="bd-placeholder-img flex-shrink-0 me-2 rounded"
                      width="32"
                      height="32"
                      xmlns="http://www.w3.org/2000/svg"
                      role="img"
                      aria-label="Placeholder: 32x32"
                      preserveAspectRatio="xMidYMid slice"
                      focusable="false"
                    >
                      <title>Placeholder</title>
                      <rect width="100%" height="100%" fill="#e83e8c" />
                      <text x="50%" y="50%" fill="#e83e8c" dy=".3em">
                        32x32
                      </text>
                    </svg>

                    <p className="pb-3 mb-0 small lh-sm border-bottom">
                      <strong className="d-block text-gray-dark">
                        @Data structure
                      </strong>
                      Some more representative placeholder content, related to
                      this other user. Another status update, perhaps.
                    </p>
                  </div>
                  <div className="d-flex text-muted pt-3">
                    <svg
                      className="bd-placeholder-img flex-shrink-0 me-2 rounded"
                      width="32"
                      height="32"
                      xmlns="http://www.w3.org/2000/svg"
                      role="img"
                      aria-label="Placeholder: 32x32"
                      preserveAspectRatio="xMidYMid slice"
                      focusable="false"
                    >
                      <title>Placeholder</title>
                      <rect width="100%" height="100%" fill="#6f42c1" />
                    </svg>

                    <p className="pb-3 mb-0 small lh-sm border-bottom">
                      <strong className="d-block text-gray-dark">@Java</strong>
                      Some more representative placeholder content, related to
                      this other user. Another status update, perhaps.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <Calendar className="calendar" />

              <div className="list-group">
                <a
                  href="#"
                  className="list-group-item list-group-item-action d-flex gap-3 py-3"
                  aria-current="true"
                >
                  <div className="d-flex gap-2 w-100 justify-content-between">
                    <div>
                      <h3 className="mb-0">Upcoming task</h3>
                      <hr />
                      <h6 className="mb-0">List group item heading</h6>
                      <p className="mb-0 opacity-75">
                        Some placeholder content in a paragraph.
                      </p>
                    </div>
                    <small className="opacity-50 text-nowrap">now</small>
                  </div>
                </a>
                <a
                  href="#"
                  className="list-group-item list-group-item-action d-flex gap-3 py-3"
                  aria-current="true"
                >
                  <div className="d-flex gap-2 w-100 justify-content-between">
                    <div>
                      <h6 className="mb-0">Another title here</h6>
                      <p className="mb-0 opacity-75">
                        Some placeholder content in a paragraph that goes a
                        little longer so it wraps to a new line.
                      </p>
                    </div>
                    <small className="opacity-50 text-nowrap">3d</small>
                  </div>
                </a>
                <a
                  href="#"
                  className="list-group-item list-group-item-action d-flex gap-3 py-3"
                  aria-current="true"
                >
                  <div className="d-flex gap-2 w-100 justify-content-between">
                    <div>
                      <h6 className="mb-0">Third heading</h6>
                      <p className="mb-0 opacity-75">
                        Some placeholder content in a paragraph.
                      </p>
                    </div>
                    <small class="opacity-50 text-nowrap">1w</small>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Dashboard;

import React from "react";
import Sidebar from "./sidebar";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../css/classroom.css";
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
                <div className="col-md-6">
                  <div className="h-100 p-5  bg-light rounded-3">
                    <h2 text-white>Change the background</h2>
                    <p>
                      Swap the background-color utility and add a `.text-*`
                      color utility to mix up the jumbotron look. Then, mix and
                      match with additional component themes and more.
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="h-100 p-5 bg-light border rounded-3">
                    <h2>Add borders</h2>
                    <p>
                      Or, keep it light and add a border for some added
                      definition to the boundaries of your content. look under
                      the hood at the source HTML here as we've adjusted the
                      alignment and sizing of both column's content
                    </p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="my-3 p-3 bg-body rounded shadow-sm">
                  <h6 className="border-bottom pb-2 mb-0">Recent updates</h6>
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
                        @username
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
                        @username
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
                      <text x="50%" y="50%" fill="#6f42c1" dy=".3em">
                        32x32
                      </text>
                    </svg>

                    <p className="pb-3 mb-0 small lh-sm border-bottom">
                      <strong className="d-block text-gray-dark">
                        @username
                      </strong>
                      This user also gets some representative placeholder
                      content. Maybe they did something interesting, and you
                      really want to highlight this in the recent updates.
                    </p>
                  </div>
                  <small className="d-block text-end mt-3">
                    <a href="#">All updates</a>
                  </small>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="d-flex flex-column align-items-stretch flex-shrink-0 bg-white">
                <a
                  href="/"
                  className="d-flex align-items-center flex-shrink-0 p-3 link-dark text-decoration-none border-bottom"
                >
                  <svg className="bi me-2" width="30" height="24">
                    <use href="#bootstrap" />
                  </svg>
                  <span className="fs-1 fw-bolder">Schedule</span>
                </a>
                <div className="list-group list-group-flush border-bottom scrollarea">
                  <a
                    href="#"
                    className="list-group-item list-group-item-action active py-3 lh-tight"
                    aria-current="true"
                  >
                    <div className="d-flex w-100 align-items-center justify-content-between">
                      <strong className="mb-1">List group item heading</strong>
                      <small>Wed</small>
                    </div>
                    <div className="col-10 mb-1 small">
                      Some placeholder content in a paragraph below the heading
                      and date.
                    </div>
                  </a>
                  <a
                    href="#"
                    className="list-group-item list-group-item-action py-3 lh-tight"
                  >
                    <div className="d-flex w-100 align-items-center justify-content-between">
                      <strong className="mb-1">List group item heading</strong>
                      <small className="text-muted">Tues</small>
                    </div>
                    <div className="col-10 mb-1 small">
                      Some placeholder content in a paragraph below the heading
                      and date.
                    </div>
                  </a>
                  <a
                    href="#"
                    className="list-group-item list-group-item-action py-3 lh-tight"
                  >
                    <div className="d-flex w-100 align-items-center justify-content-between">
                      <strong className="mb-1">List group item heading</strong>
                      <small className="text-muted">Mon</small>
                    </div>
                    <div className="col-10 mb-1 small">
                      Some placeholder content in a paragraph below the heading
                      and date.
                    </div>
                  </a>

                  <a
                    href="#"
                    className="list-group-item list-group-item-action py-3 lh-tight"
                    aria-current="true"
                  >
                    <div className="d-flex w-100 align-items-center justify-content-between">
                      <strong className="mb-1">List group item heading</strong>
                      <small className="text-muted">Wed</small>
                    </div>
                    <div className="col-10 mb-1 small">
                      Some placeholder content in a paragraph below the heading
                      and date.
                    </div>
                  </a>
                  <a
                    href="#"
                    className="list-group-item list-group-item-action py-3 lh-tight"
                    aria-current="true"
                  >
                    <div className="d-flex w-100 align-items-center justify-content-between">
                      <strong className="mb-1">List group item heading</strong>
                      <small className="text-muted">Wed</small>
                    </div>
                    <div className="col-10 mb-1 small">
                      Some placeholder content in a paragraph below the heading
                      and date.
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Dashboard;

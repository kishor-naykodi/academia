import React, { Component } from "react";
import StudentProgress from "../data_visualizer/progressGraph";
import Performance from "../data_visualizer/pieChart";
import auth from "../../../services/authService";
class DashMain extends Component {
  render() {
    return (
      <main className="main">
        <h1 className="main__title">Dashboard</h1>
        <div className="main-header">
          <div className="main-header__heading">
            Hello {auth.getCurrentUser().username},
          </div>
          <div className="main-header__updates">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos
            tempora pariatur repellendus quas maiores iste. Itaque, distinctio
            dolor incidunt, cumque temporibus nesciunt minima officiis fugit
            iste provident natus aliquam ipsum!
          </div>
        </div>
        <div className="main-overview">
          <div id="overviewcard1" className="overviewcard">
            <div className="overviewcard__icon" id="dash-meet_link">
              Upcoming Lecture
            </div>
            <div className="overviewcard__info">
              https://meet.google.com/uxs-sxud-pfa
            </div>
          </div>
          <div id="overviewcard2" className="overviewcard">
            <div className="overviewcard__icon">Assignments</div>
            <div className="overviewcard__info">5/6</div>
          </div>
          <div id="overviewcard3" className="overviewcard">
            <div className="overviewcard__icon">Attendance</div>
            <div className="overviewcard__info">80%</div>
          </div>
          <div id="overviewcard4" className="overviewcard">
            <div className="overviewcard__icon">Classrooms enrolled</div>
            <div className="overviewcard__info">7</div>
          </div>
        </div>
        <div className="main-cards">
          <div className="main-card">
            <h3 className="card__header">Weekly Progress</h3>
            <hr className="card__ruler" />
            <StudentProgress />
          </div>
          <div className="main-card">
            <h3 className="card__header">Overall Performance</h3>
            <hr className="card_ruler" />
            <Performance />
          </div>
        </div>
      </main>
    );
  }
}

export default DashMain;

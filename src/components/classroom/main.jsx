import React, { Component } from "react";
import StudentProgress from "./progressGraph";
import Performance from "./pieChart";
import auth from "./../../services/authService";
class Main extends Component {
  render() {
    return (
      <main className="main">
        <h1 className="main__title">Dashboard</h1>
        <div className="main-header">
          <div className="main-header__heading">
            Hello {auth.getCurrentUser().name},
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
            <div className="overviewcard__icon">Overview</div>
            <div className="overviewcard__info">Card</div>
          </div>
          <div id="overviewcard2" className="overviewcard">
            <div className="overviewcard__icon">Overview</div>
            <div className="overviewcard__info">Card</div>
          </div>
          <div id="overviewcard3" className="overviewcard">
            <div className="overviewcard__icon">Overview</div>
            <div className="overviewcard__info">Card</div>
          </div>
          <div id="overviewcard4" className="overviewcard">
            <div className="overviewcard__icon">Overview</div>
            <div className="overviewcard__info">Card</div>
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

export default Main;

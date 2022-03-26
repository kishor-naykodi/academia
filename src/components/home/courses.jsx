import React from "react";

class Courses extends React.Component {
  render() {
    return (
      <section className="block container block-courses">
        <div className="grid grid--1x3">
          <div className="course">
            <div className="card card--secondary">
              <header className="card__header">
                <img src="images/python_course.webp" alt="Python Course" />
              </header>
              <div className="card__body">
                <ul className="list list--tick">
                  <li className="list__item">Python Classroom videos</li>
                  <li className="list__item">Lifetime access</li>
                  <li className="list__item">Free Of Cost</li>
                </ul>
                <button className="btn btn--outline btn--block">
                  Start Now
                </button>
              </div>
            </div>
          </div>
          <div className="course course--popular">
            <div className="card card--primary">
              <header className="card__header">
                <img src="images/java_course.webp" alt="Java Course" />
              </header>
              <div className="card__body">
                <ul className="list list--tick">
                  <li className="list__item">Java Classroom Videos</li>
                  <li className="list__item">Lifetime access</li>
                  <li className="list__item">Free Of Cost</li>
                </ul>
                <button className="btn btn--outline btn--block">
                  Start Now
                </button>
              </div>
            </div>
          </div>
          <div className="course">
            <div className="card card--secondary">
              <header className="card__header">
                <img
                  src="images/data_structure.webp"
                  alt="Data Structure Course"
                />
              </header>
              <div className="card__body">
                <ul className="list list--tick">
                  <li className="list__item">Data Structure Videos</li>
                  <li className="list__item">Lifetime access</li>
                  <li className="list__item">Free Of Cost</li>
                </ul>
                <button className="btn btn--outline btn--block">
                  Start Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Courses;

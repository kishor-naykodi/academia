import React from "react";

class Courses extends React.Component {
  render() {
    return (
      <section class="block container block-courses">
        <div class="grid grid--1x3">
          <div class="course">
            <div class="card card--secondary">
              <header class="card__header">
                <img src="images/python_course.webp" alt="Python Course" />
              </header>
              <div class="card__body">
                <ul class="list list--tick">
                  <li class="list__item">Python Classroom videos</li>
                  <li class="list__item">Lifetime access</li>
                  <li class="list__item">Free Of Cost</li>
                </ul>
                <button class="btn btn--outline btn--block">Start Now</button>
              </div>
            </div>
          </div>
          <div class="course course--popular">
            <div class="card card--primary">
              <header class="card__header">
                <img src="images/java_course.webp" alt="Java Course" />
              </header>
              <div class="card__body">
                <ul class="list list--tick">
                  <li class="list__item">Java Classroom Videos</li>
                  <li class="list__item">Lifetime access</li>
                  <li class="list__item">Free Of Cost</li>
                </ul>
                <button class="btn btn--outline btn--block">Start Now</button>
              </div>
            </div>
          </div>
          <div class="course">
            <div class="card card--secondary">
              <header class="card__header">
                <img
                  src="images/data_structure.webp"
                  alt="Data Structure Course"
                />
              </header>
              <div class="card__body">
                <ul class="list list--tick">
                  <li class="list__item">Data Structure Videos</li>
                  <li class="list__item">Lifetime access</li>
                  <li class="list__item">Free Of Cost</li>
                </ul>
                <button class="btn btn--outline btn--block">Start Now</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Courses;

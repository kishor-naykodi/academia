import React from "react";

class Testimonials extends React.Component {
  render() {
    return (
      <section className="block" data-aos="zoom-in">
        <header className="block__header">
          <h2 className="heading__dark">
            Savitribai Phule Pune University 2021-22
          </h2>
          <h3 className="heading__dark">
            PDEA'S College Of Engineering Manjari Bk
          </h3>
        </header>
        <div className="container">
          <div className="card testimonial">
            <div className="grid grid--1x2">
              <div className="testimonial__image">
                <img src="images/college.png" alt="college" />
                <span className="icon-container icon-container--accent">
                  <svg className="icon icon--white icon--small">
                    <use href="images/sprite.svg#quotes"></use>
                  </svg>
                </span>
              </div>
              <blockquote className="quote">
                <p className="quote__text">
                  Project Name : "Academia a web platform for E-learning"
                </p>
                <p>Project Members : Abhishek Lavale</p>
                <p>Kishor Naykodi</p>
                <p>Abhishek Raut</p>
                <p>Prajwal Gadekar</p>
                <footer>
                  <div className="media">
                    <div className="media__image">
                      <svg className="icon icon--primary quote__line">
                        <use href="images/sprite.svg#line"></use>
                      </svg>
                    </div>
                    <div className="media__body">
                      <h3 className="heading__dark media__title quote__author">
                        Project Guide : S.V.Phulari
                      </h3>
                    </div>
                  </div>
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Testimonials;

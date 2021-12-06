import React from "react";

class Testimonials extends React.Component {
  render() {
    return (
      <section className="block" data-aos="zoom-in">
        <header className="block__header">
          <h2>What our Customers are Saying</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut,
            ipsam.
          </p>
        </header>
        <div className="container">
          <div className="card testimonial">
            <div className="grid grid--1x2">
              <div className="testimonial__image">
                <img
                  src="images/testimonial.jpg"
                  alt="A happy, smiling customer"
                />
                <span className="icon-container icon-container--accent">
                  <svg className="icon icon--white icon--small">
                    <use href="images/sprite.svg#quotes"></use>
                  </svg>
                </span>
              </div>
              <blockquote className="quote">
                <p className="quote__text">
                  “Any fool can write code that a computer can understand. Good
                  programmers write code that humans can understand.”
                </p>
                <footer>
                  <div className="media">
                    <div className="media__image">
                      <svg className="icon icon--primary quote__line">
                        <use href="images/sprite.svg#line"></use>
                      </svg>
                    </div>
                    <div className="media__body">
                      <h3 className="media__title quote__author">
                        Martin Fowler
                      </h3>
                      <p className="quote__organization">ABC Company</p>
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

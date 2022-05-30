import React from "react";
import { Link } from "react-router-dom";

class Hero extends React.Component {
  render() {
    return (
      <section className="block hero">
        <div className="container grid grid--1x2">
          <header className="block__header hero__content">
            <h1 data-aos="fade-right" className="block__heading">
              Academia : Web Platform for E-learning
            </h1>
            <p className="hero__tagline">Enjoy Your learning with us.</p>
            <input
              type="text"
              className="hero__input"
              placeholder="Email Address"
            />
            <Link
              to="/login"
              className="hero__btn btn btn--accent btn--stretched"
            >
              Get Started
            </Link>
          </header>
          <picture data-aos="zoom-in">
            <source type="image/webp" srcSet="images/home_laptop.webp" />
            <img className="hero__image" src="images/home_laptop" alt="" />
          </picture>
        </div>
      </section>
    );
  }
}

export default Hero;

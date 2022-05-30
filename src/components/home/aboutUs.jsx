import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function AboutUs() {
  function toggle() {
    const collapsibles = document.querySelectorAll(".collapsible");
    collapsibles.forEach((item) =>
      item.addEventListener("click", function () {
        this.classList.toggle("collapsible--expanded");
      })
    );
  }

  return (
    <main className="block--dark">
      <nav className="nav collapsible nav_toggle" onLoad={toggle}>
        <NavLink className="nav__brand" to="/">
          <img src="images/logo.webp" alt="" />
          <i id="webName">Academia</i>
        </NavLink>
        <svg className="icon icon--white nav__toggler">
          <use to="images/sprite.svg#menu"></use>
        </svg>
        <ul className="list nav__list collapsible__content">
          <li className="nav__item">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="nav__item">
            <NavLink to="/about_us">About Us</NavLink>
          </li>
        </ul>
      </nav>
      <section className="block hero">
        <div className="container grid grid--1x2">
          <header className="block__header hero__content">
            <h1 className="block__heading">About Us</h1>
            <p className="hero__tagline">
              We aim to create an E-Learning Web Application is to use the
              latest web technologies to develop a solution for educational
              system and provide error free, reliable, secure and interactive
              self-learning online platform for enthusiastic learner.
            </p>

            <Link
              to="/login"
              className="hero__btn btn btn--accent btn--stretched"
            >
              Get Started
            </Link>
          </header>
          <picture>
            <source type="image/webp" srcSet="images/home_laptop.webp" />
            <img className="hero__image" src="images/home_laptop" alt="" />
          </picture>
        </div>
      </section>
    </main>
  );
}

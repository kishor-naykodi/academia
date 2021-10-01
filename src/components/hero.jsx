import React from "react";

class Hero extends React.Component {
  render() {
    return (
      <section className="block block--dark block--skewed-left hero">
        <div className="container grid grid--1x2">
          <header className="block__header hero__content">
            <h1 data-aos="fade-right" className="block__heading">
              Elearning Platform for Students
            </h1>
            <p className="hero__tagline">Enjoy Your learning with us.</p>
            <a href="" className="btn btn--accent btn--stretched">
              Get Started
            </a>
          </header>
          <picture data-aos="zoom-in">
            <source
              type="image/webp"
              srcSet="images/banner.webp 1x, images/banner@2x.webp 2x"
            />
            <source
              type="image/png"
              srcSet="images/banner.png 1x, images/banner@2x.png 2x"
            />
            <img className="hero__image" src="images/banner.png" alt="" />
          </picture>
        </div>
      </section>
    );
  }
}

export default Hero;

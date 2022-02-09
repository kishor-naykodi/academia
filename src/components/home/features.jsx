import React from "react";

class Features extends React.Component {
  render() {
    return (
      <section className="block--secondary block wide-block">
        <header className="block__header">
          <h2>Academia the best learning platform...</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed,
            voluptatem.
          </p>
        </header>
        <article className="grid grid--1x2 feature">
          <div className="feature__content" data-aos="fade-right">
            <span className="icon-container">
              <svg className="icon icon--primary">
                <use href="images/sprite.svg#easy"></use>
              </svg>
            </span>
            <h3 className="feature__heading">Super Easy to Use</h3>
            <p>
              A dashboard and the everything layouted well so that everyone can
              browse content fine.
            </p>
            <a href="#" className="link-arrow">
              Learn More
            </a>
          </div>
          <picture data-aos="zoom-in-left">
            <source
              type="image/webp"
              srcSet="images/easy.webp 1x, images/easy@2x.webp 2x"
            />
            <source
              type="image/jpg"
              srcSet="images/easy.png 1x, images/easy@2x.jpg 2x"
            />
            <img className="feature__image" src="images/easy@2x.jpg" alt="" />
          </picture>
        </article>
        <article className="grid grid--1x2 feature">
          <div className="feature__content">
            <span className="icon-container">
              <svg className="icon icon--primary">
                <use href="images/sprite.svg#computer"></use>
              </svg>
            </span>
            <h3 className="feature__heading">Open Source.</h3>
            <p>
              We’re with the mission to provide a free, world-class education
              for anyone, anywhere.
            </p>
            <a href="#" className="link-arrow">
              Learn More
            </a>
          </div>
          <picture>
            <source
              type="image/webp"
              srcSet="images/open-source.webp 1x, images/fast@2x.webp 2x"
            />
            <source
              type="image/jpg"
              srcSet="images/open-source.jpg 1x, images/fast@2x.jpg 2x"
            />
            <img className="feature__image" src="images/fast@2x.jpg" alt="" />
          </picture>
        </article>
        <article className="grid grid--1x2 feature">
          <div className="feature__content" data-aos="fade-right">
            <span className="icon-container">
              <svg className="icon icon--primary">
                <use href="images/sprite.svg#clock"></use>
              </svg>
            </span>
            <h3 className="feature__heading">24/7 Expert Support</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
              obcaecati vel ad unde est illo at. Labore excepturi officia
              dolores!
            </p>
            <a href="#" className="link-arrow">
              Learn More
            </a>
          </div>
          <picture>
            <source
              type="image/webp"
              srcSet="images/support.webp 1x, images/support@2x.webp 2x"
            />
            <source
              type="image/jpg"
              srcSet="images/support.jpg 1x, images/support@2x.jpg 2x"
            />
            <img
              className="feature__image"
              src="images/support@2x.jpg"
              alt=""
            />
          </picture>
        </article>
      </section>
    );
  }
}

export default Features;

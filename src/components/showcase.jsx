import React from "react";

class Showcase extends React.Component {
  render() {
    return (
      <section className="block block--dark block--skewed-right block-showcase">
        <header className="block__header">
          <h2>User-friendly Control Panel</h2>
        </header>
        <div className="container grid grid--1x2">
          <picture data-aos="fade-right" className="block-showcase__image">
            <source
              type="image/webp"
              srcSet="images/ipad.webp 1x, images/ipad@2x.webp 2x"
            />
            <source
              type="image/png"
              srcSet="images/ipad.png 1x, images/ipad@2x.png 2x"
            />
            <img src="images/ipad.png" alt="" />
          </picture>
          <ul className="list" data-aos="fade-up">
            <li>
              <div className="media">
                <div className="media__image">
                  <svg className="icon icon--primary">
                    <use href="images/sprite.svg#snap"></use>
                  </svg>
                </div>
                <div className="media__body">
                  <h3 className="media__title">Easy Start & Managed Updates</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Veniam quisquam, ex nostrum vero voluptates dicta excepturi
                    vel perspiciatis consequuntur ab.
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="media">
                <div className="media__image">
                  <svg className="icon icon--primary">
                    <use href="images/sprite.svg#growth"></use>
                  </svg>
                </div>
                <div className="media__body">
                  <h3 className="media__title">
                    Graphical Data Representation
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Veniam quisquam, ex nostrum vero voluptates dicta excepturi
                    vel perspiciatis consequuntur ab.
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="media">
                <div className="media__image">
                  <svg className="icon icon--primary">
                    <use href="images/sprite.svg#wordpress"></use>
                  </svg>
                </div>
                <div className="media__body">
                  <h3 className="media__title">User Dashboard</h3>
                  <p>
                    We designed the design of all the sub-pages needed for the
                    users..
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>
    );
  }
}

export default Showcase;

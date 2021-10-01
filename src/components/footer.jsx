import React from "react";
class Footer extends React.Component {
  render() {
    return (
      <footer className="block block--dark footer">
        <div className="container grid footer__sections">
          <section className="collapsible collapsible--expanded footer__section">
            <header className="collapsible__header">
              <h2 className="collapsible__heading footer__heading">About Us</h2>
              <svg className="icon icon--white collapsible__chevron">
                <use href="images/sprite.svg#chevron"></use>
              </svg>
            </header>
            <div className="collapsible__content">
              <ul className="list">
                <li>
                  <a href="#">Online Learning</a>
                </li>
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Careers</a>
                </li>
                <li>
                  <a href="#">Become An Instructor</a>
                </li>
              </ul>
            </div>
          </section>
          <section className="collapsible footer__section">
            <header className="collapsible__header">
              <h2 className="collapsible__heading footer__heading">Campus</h2>
              <svg className="icon icon--white collapsible__chevron">
                <use href="images/sprite.svg#chevron"></use>
              </svg>
            </header>
            <div className="collapsible__content">
              <ul className="list">
                <li>
                  <a href="#">Academic Solution</a>
                </li>
                <li>
                  <a href="#">Affiliates</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
              </ul>
            </div>
          </section>
          <section className="collapsible footer__section">
            <header className="collapsible__header">
              <h2 className="collapsible__heading footer__heading">Study</h2>
              <svg className="icon icon--white collapsible__chevron">
                <use href="images/sprite.svg#chevron"></use>
              </svg>
            </header>
            <div className="collapsible__content">
              <ul className="list">
                <li>
                  <a href="#">Admissions Policy</a>
                </li>
                <li>
                  <a href="#">Getting Started</a>
                </li>
                <li>
                  <a href="#">FAQ</a>
                </li>
              </ul>
            </div>
          </section>
          <section className="collapsible footer__section">
            <header className="collapsible__header">
              <h2 className="collapsible__heading footer__heading">Support</h2>
              <svg className="icon icon--white collapsible__chevron">
                <use href="images/sprite.svg#chevron"></use>
              </svg>
            </header>
            <div className="collapsible__content">
              <ul className="list">
                <li>
                  <a href="#">Support</a>
                </li>
                <li>
                  <a href="#">Terms of Use</a>
                </li>
                <li>
                  <a href="#">Contact Us</a>
                </li>
                <li>
                  <a href="#">Site Feedback</a>
                </li>
              </ul>
            </div>
          </section>
          <section className="footer__brand">
            <img src="images/logo.svg" alt="" />
            <p className="footer__copyright">Copyright 2021 Elearner</p>
          </section>
        </div>
      </footer>
    );
  }
}

export default Footer;

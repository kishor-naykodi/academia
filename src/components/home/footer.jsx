import React from "react";
import { Link } from "react-router-dom";
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
                  <Link to="#">Online Learning</Link>
                </li>
                <li>
                  <Link to="#">About Us</Link>
                </li>
                <li>
                  <Link to="#">Careers</Link>
                </li>
                <li>
                  <Link to="#">Become An Instructor</Link>
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
                  <Link to="#">Academic Solution</Link>
                </li>
                <li>
                  <Link to="#">Affiliates</Link>
                </li>
                <li>
                  <Link to="#">Blog</Link>
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
                  <Link to="#">Admissions Policy</Link>
                </li>
                <li>
                  <Link to="#">Getting Started</Link>
                </li>
                <li>
                  <Link to="#">FAQ</Link>
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
                  <Link to="#">Support</Link>
                </li>
                <li>
                  <Link to="#">Terms of Use</Link>
                </li>
                <li>
                  <Link to="#">Contact Us</Link>
                </li>
                <li>
                  <Link to="#">Site Feedback</Link>
                </li>
              </ul>
            </div>
          </section>
          <section className="footer__brand">
            <a className="nav__brand" href="/">
              <img src="images/logo.webp" alt="" />
              <i id="webName" href="/">
                Academia
              </i>
            </a>
            <p className="footer__copyright">
              Copyright &copy; 2021 academia.com
            </p>
          </section>
        </div>
      </footer>
    );
  }
}

export default Footer;

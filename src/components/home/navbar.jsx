import React, { Component } from "react";
import { Link } from "react-router-dom";
class Navbar extends Component {
  toggle() {
    const collapsibles = document.querySelectorAll(".collapsible");
    collapsibles.forEach((item) =>
      item.addEventListener("click", function () {
        this.classList.toggle("collapsible--expanded");
      })
    );
  }

  render() {
    return (
      <nav className="nav collapsible nav_toggle" onLoad={this.toggle}>
        <a className="nav__brand" href="/">
          <img src="images/logo.webp" alt="" />
          <i id="webName" href="/">
            Academia
          </i>
        </a>
        <svg className="icon icon--white nav__toggler">
          <use href="images/sprite.svg#menu"></use>
        </svg>
        <ul className="list nav__list collapsible__content">
          <li className="nav__item">
            <Link to="/">Home</Link>
          </li>
          <li className="nav__item">
            <Link to="/classroom">classroom</Link>
          </li>
          <li className="nav__item">
            <Link to="/question">Discussion Forum</Link>
          </li>
          <li className="nav__item">
            <a href="#">Teachers</a>
          </li>
          <li className="nav__item">
            <a href="#">About Us</a>
          </li>
          <li id="Account" className="nav__item fa-lg">
            <a href="#" className="fas fa-user-circle"></a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;

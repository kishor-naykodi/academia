import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Account from "../common/account";
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
          {this.props.user && (
            <li className="nav__item">
              <NavLink to="/dashboard">Dashboard</NavLink>
            </li>
          )}
          <li className="nav__item">
            <NavLink to="#">Teachers</NavLink>
          </li>
          <li className="nav__item">
            <NavLink to="#">About Us</NavLink>
          </li>
          {!this.props.user && (
            <li className="nav__item">
              <NavLink to="/login">Sign in</NavLink>
            </li>
          )}
          {this.props.user && <Account user={this.props.user} />}
        </ul>
      </nav>
    );
  }
}

export default Navbar;

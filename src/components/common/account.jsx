import React, { Component } from "react";
import { Link } from "react-router-dom";
import { MdAccountCircle } from "react-icons/md";

class Account extends Component {
  render() {
    return (
      <li className="account nav__item dropdown">
        <div>
          <MdAccountCircle />
        </div>
        <div className="dropdown-menu dropdown-menu-sw">
          <div className="dropdown-item">
            Signed in as
            <div>{this.props.user.name}</div>
          </div>
          <div className="dropdown-divider"></div>
          <Link className="dropdown-item" to="#">
            Help
          </Link>
          <Link className="dropdown-item" to="#">
            Settings
          </Link>
          <div className="dropdown-divider"></div>
          <Link className="dropdown-item" to="/logout">
            Sign Out
          </Link>
        </div>
      </li>
    );
  }
}

export default Account;

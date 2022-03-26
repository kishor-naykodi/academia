import React, { Component } from "react";
import { FaRegBell } from "react-icons/fa";
import { CgMenuLeftAlt } from "react-icons/cg";
import { RiEnglishInput } from "react-icons/ri";
import { MdOutlineDarkMode } from "react-icons/md";
import Account from "./../common/account";
import auth from "./../../services/authService";

class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="menu-icon">
          <CgMenuLeftAlt id="nav__toggler" className="header__icon" />
        </div>

        <div className="header__content">
          <MdOutlineDarkMode className="header__icon" />
          <RiEnglishInput className="header__icon" />
          <FaRegBell className="header__icon" />
          <Account className="dash-account" user={auth.getCurrentUser()} />
        </div>
      </header>
    );
  }
}

export default Header;

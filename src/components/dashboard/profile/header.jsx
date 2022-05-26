import React, { Component } from "react";
import { FaRegBell } from "react-icons/fa";
import { CgMenuLeftAlt } from "react-icons/cg";
import { RiEnglishInput } from "react-icons/ri";
import { MdOutlineDarkMode } from "react-icons/md";
import Account from "../../common/account";
import auth from "../../../services/authService";
import { toggleSidenav } from "../../common/utilFunc";

class Header extends Component {
  render() {
    return (
      <nav className="navbar">
        <header className="header">
          <div className="menu-icon" onClick={toggleSidenav}>
            <CgMenuLeftAlt id="nav__toggler" className="header__icon" />
          </div>

          <div className="header__content">
            <MdOutlineDarkMode className="header__icon" />
            <RiEnglishInput className="header__icon" />
            <FaRegBell className="header__icon" />
            <Account className="header__icon" user={auth.getCurrentUser()} />
          </div>
        </header>
      </nav>
    );
  }
}

export default Header;

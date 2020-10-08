import React from "react";
import { NavLink } from "react-router-dom";

function NonAuthHeader() {
  return (
    <div className="headerDiv">
      <header className="flex">
        <h1 className="headerTitle">CONDUIT</h1>
        <nav className="navLinks flex">
          <NavLink
            to="/login"
            className="inactiveNav"
            activeClassName="activeNav"
          >
            Login
          </NavLink>
          <NavLink
            to="/register"
            className="inactiveNav"
            activeClassName="activeNav"
          >
            Register
          </NavLink>
        </nav>
      </header>
    </div>
  );
}

export default NonAuthHeader;

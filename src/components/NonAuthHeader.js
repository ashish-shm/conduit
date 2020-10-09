import React from "react";
import { NavLink, Link } from "react-router-dom";

function NonAuthHeader() {
  return (
    <div className="headerDiv">
      <header className="flex">
        <Link to="/" className="headerTitle">
          CONDUIT
        </Link>
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

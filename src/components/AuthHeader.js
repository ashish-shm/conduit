import React from "react";
import { NavLink, Link } from "react-router-dom";

export default function AuthHeader() {
  return (
    <div className="headerDiv">
      <header className="flex">
        <Link to="/" className="headerTitle">
          CONDUIT
        </Link>
        <nav className="navLinks flex">
          <NavLink
            to="/dashboard"
            className="inactiveNav"
            activeClassName="activeNav"
          >
            Home
          </NavLink>
          <NavLink
            to="/register"
            className="inactiveNav"
            activeClassName="activeNav"
          >
            New
          </NavLink>
        </nav>
      </header>
    </div>
  );
}

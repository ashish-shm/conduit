import React from "react";
import { NavLink, Link } from "react-router-dom";

export default function AuthHeader() {
  return (
    <div className="header">
      <header className="flex">
        <Link to="/" className="headerTitle">
          CONDUIT
        </Link>
        <nav className="navLinks flex">
          <NavLink to="/" className="inactiveNav" activeClassName="activeNav">
            Home
          </NavLink>
          <NavLink to="#" className="inactiveNav" activeClassName="activeNav">
            New
          </NavLink>
        </nav>
      </header>
    </div>
  );
}

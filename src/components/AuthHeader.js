import React from "react";
import { NavLink } from "react-router-dom";

export default function AuthHeader() {
  return (
    <div className="header">
      <header className="flex">
        <h1 className="headerTitle">CONDUIT</h1>
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

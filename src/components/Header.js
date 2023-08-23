import React from "react";
import { NavLink as Link } from "react-router-dom";
import "./NavbarStyles.css";
import Button from "../components/Button";

export default function Navbar() {
  return (
    <div className="header">
      <div className="navbar">
        <div className="navbar-left">
          <Link to="/" className="navbar-left-nav-link">
            Startseite
          </Link>
          <Link to="/" className="navbar-left-nav-link">
            Gruppen
          </Link>
          <Link to="/" className="navbar-left-nav-link">
            Blog
          </Link>
          <Link to="/" className="navbar-left-nav-link">
            Preisübersicht
          </Link>
          <Link to="/about" className="navbar-left-nav-link">
            Über uns
          </Link>
        </div>
        <div className="navbar-right">
          <Button title="Mitglied werden" />
        </div>
      </div>
    </div>
  );
}

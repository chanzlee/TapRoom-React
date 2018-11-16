import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    //Import bootstrap format
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        Tap Room
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <NavLink className="nav-item nav-link" to="/store">
            Store <span className="sr-only">(current)</span>
          </NavLink>
          <NavLink className="nav-item nav-link" to="/admin">
            Admin
          </NavLink>
          <NavLink className="nav-item nav-link" to="#">
            About
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

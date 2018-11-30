import React from "react";
import { Link, NavLink } from "react-router-dom";
import PropTypes from "prop-types";

const NavBar = props => {
  const { loggedIn, currentUser, logOut } = props;
  return (
    //Import bootstrap format
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        SeaTap
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
          <NavLink className="nav-item nav-link" to="/employee">
            Employee
          </NavLink>
          {loggedIn ? (
            <NavLink className="nav-item nav-link" onClick={logOut} to="/login">
              Logout
            </NavLink>
          ) : (
            <NavLink className="nav-item nav-link" to="/login">
              Login
            </NavLink>
          )}
          <NavLink className="nav-item nav-link disabled ml-5" to="/login">
            Hello, {currentUser.name ? currentUser.name : "Visitor"}
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

NavBar.propTypes = {
  loggedIn: PropTypes.bool,
  currentUser: PropTypes.object,
  logOut: PropTypes.func.isRequired
};

export default NavBar;

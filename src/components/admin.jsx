import React from "react";
import Kegs from "./kegs";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";

const Admin = props => {
  let isAdmin = props.currentUser.admin === true ? true : false;
  return isAdmin ? (
    <div>
      <h1>Admin</h1>
      <Kegs isAdmin={isAdmin} />
    </div>
  ) : (
    <Redirect to="/not-allowed" />
  );
};

Admin.propTypes = {
  currentUser: PropTypes.object
};

export default Admin;

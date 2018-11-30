import React from "react";
import Kegs from "./kegs";
import PropTypes from "prop-types";

const Admin = props => {
  let isAdmin = props.currentUser.admin === true ? true : false;
  return (
    <div>
      <h1>Admin</h1>
      <Kegs isAdmin={isAdmin} />
    </div>
  );
};

Admin.propTypes = {
  currentUser: PropTypes.object
};

export default Admin;

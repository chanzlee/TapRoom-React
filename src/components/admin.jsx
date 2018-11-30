import React from "react";
import Kegs from "./kegs";

const Admin = props => {
  let isAdmin = props.currentUser.admin === true ? true : false;
  return (
    <div>
      <h1>Admin</h1>
      <Kegs isAdmin={isAdmin} />
    </div>
  );
};

export default Admin;

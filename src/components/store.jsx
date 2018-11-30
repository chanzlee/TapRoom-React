import React from "react";
import Kegs from "./kegs";

const Store = () => {
  let isAdmin = false;
  return (
    <div>
      <h1>Store</h1>
      <Kegs isAdmin={isAdmin} />
    </div>
  );
};

export default Store;

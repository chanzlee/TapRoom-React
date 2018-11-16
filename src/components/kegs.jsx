import React from "react";
import { getKegList } from "../services/kegService";

const Kegs = () => {
  const kegs = getKegList();
  return (
    <div>
      <h1>Kegs</h1>
      <div>
        {kegs.map((keg, index) => {
          return <li key={index}>{keg.name}</li>;
        })}
      </div>
    </div>
  );
};

export default Kegs;

import React from "react";

const Sell = props => {
  return (
    <span>
      <button onClick={props.onClick} className="btn btn-warning btn-sm">
        Sell
        <i className="fa fa-beer" aria-hidden="true" />
      </button>
    </span>
  );
};

export default Sell;

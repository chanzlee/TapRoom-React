import React from "react";

const Sell = props => {
  return (
    <span>
      <button onClick={props.onClick} className="btn btn-warning btn-sm">
        <i className="fa fa-beer" aria-hidden="true">
          &nbsp;Sell
        </i>
      </button>
    </span>
  );
};

export default Sell;

import React from "react";
import PropTypes from "prop-types";

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

Sell.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default Sell;

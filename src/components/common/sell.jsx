import React from "react";
import PropTypes from "prop-types";

const Sell = props => {
  let classes = "fa fa-";
  classes += props.product === "pint" ? "beer" : "database";
  return (
    <span>
      <button onClick={props.onClick} className="btn btn-warning btn-sm">
        <i className={classes} aria-hidden="true">
          <span className="px-1">{props.product}</span>
        </i>
      </button>
    </span>
  );
};

Sell.propTypes = {
  onClick: PropTypes.func.isRequired,
  product: PropTypes.string
};

export default Sell;

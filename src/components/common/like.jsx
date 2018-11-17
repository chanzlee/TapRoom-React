import React from "react";
import PropTypes from "prop-types";

//Input like: boolean
//Output raise Onclick event

const Like = props => {
  let classes = "fa fa-thumbs-o-up";
  if (props.liked) classes += " text-primary";
  return (
    <span>
      <i
        style={{ cursor: "pointer", fontSize: 23, fontWeight: 700 }}
        onClick={props.onClick}
        className={classes}
        aria-hidden="true"
      />
    </span>
  );
};

Like.propTypes = {
  liked: PropTypes.bool,
  onClick: PropTypes.func.isRequired
};

export default Like;

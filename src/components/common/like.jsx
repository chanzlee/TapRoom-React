import React from "react";

//Input like: boolean
//Output raise Onclick event

const Like = props => {
  let classes = "fa fa-thumbs-o-up";
  if (!props.liked) classes += " blue";
  return (
    <i
      style={{ cursor: "pointer" }}
      onClick={props.onClick}
      className={classes}
      aria-hidden="true"
    />
  );
};

export default Like;

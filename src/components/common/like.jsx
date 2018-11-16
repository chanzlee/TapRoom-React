import React from "react";

//Input like: boolean
//Output raise Onclick event

const Like = props => {
  let classes = "fa fa-thumbs-o-up";
  if (props.liked) classes += " blue";
  return (
    <span>
      <style jsx>
        {`
          .blue {
            color: blue;
          }
        `}
      </style>
      <i
        style={{ cursor: "pointer" }}
        onClick={props.onClick}
        className={classes}
        aria-hidden="true"
      />
    </span>
  );
};

export default Like;

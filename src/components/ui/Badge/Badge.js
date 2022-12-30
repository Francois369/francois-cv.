import React from "react";
import classes from "./Badge.module.css";

const Badge = (props) => {
  return (
    <div className={classes["badge"]}>
      <h1 className={classes["badge-header"]}>{props.children}</h1>
    </div>
  );
};

export default Badge;

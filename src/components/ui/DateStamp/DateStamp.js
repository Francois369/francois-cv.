import React from "react";
import { Fragment } from "react";
import classes from "./DateStamp.module.css";

const DateStamp = (props) => {
  return (
    <Fragment>
      <div>
        <p>{props.data.DateFromMonth}</p>
        <p>{props.data.DateFromYear}</p>
      </div>
      <div>
        <p>{props.data.DateFromMonth}</p>
        <p>{props.data.DateFromYear}</p>
      </div>
    </Fragment>
  );
};

export default DateStamp;

import React from "react";

import classes from "./OrderRow.module.css";

const orderRow = (props) => {
  return (
    <div className={classes.orderRow}>
      <div className={classes.orderRowCol}>{props.name}</div>
      <div className={classes.orderRowCol}>{props.number}</div>
      <div className={classes.orderRowCol}>{props.price}</div>
      <div className={classes.orderRowCol}>
        <span onClick={props.add} className={classes.add}>
          +
        </span>
        <span onClick={props.remove} className={classes.remove}>
          -
        </span>
      </div>
    </div>
  );
};

export default orderRow;

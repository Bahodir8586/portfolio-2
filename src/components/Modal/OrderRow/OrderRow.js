import React from "react";

import classes from "./OrderRow.module.css";

const orderRow = (props) => {
  return (
    <React.Fragment>
      <div className={classes.orderRow}>
        <div className={classes.orderRowCol}>
          <strong>{props.name}</strong>
        </div>
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
    </React.Fragment>
  );
};

export default orderRow;

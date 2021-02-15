import { prependOnceListener } from "process";
import React from "react";

import classes from "./FilterElement.module.css";

const filterElement = (props) => {
  let classList = [classes.filterElement];
  props.active ? classList.push(classes.active) : classList.push(null);
  return (
    <div className={classList.join(" ")} onClick={props.clicked}>
      {props.children}
    </div>
  );
};

export default filterElement;

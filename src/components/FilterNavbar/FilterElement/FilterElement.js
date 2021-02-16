import React from "react";

import classes from "./FilterElement.module.css";

const addingActiveClass = (e) => {
  let oldActive = document.getElementsByClassName(classes.active);
  oldActive[0].classList.remove(classes.active);
  e.target.classList.add(classes.active);
};

const filterElement = (props) => {
  let classesList = [classes.filterElement];
  props.active ? classesList.push(classes.active) : classesList.push(null);
  return (
    <div
      className={classesList.join(" ")}
      onClick={(event) => {
        props.clicked(event);
        addingActiveClass(event);
      }}
    >
      {props.children}
    </div>
  );
};

export default filterElement;

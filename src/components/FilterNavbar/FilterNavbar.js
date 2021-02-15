import React from "react";

import FilterElement from "./FilterElement/FilterElement";
import classes from "./FilterNavbar.module.css";

const filterNavbar = (props) => {
  return (
    <div className={classes.filterNavbar}>
      <FilterElement active clicked={props.clicked}>
        All
      </FilterElement>
      <FilterElement clicked={props.clicked}>Pizza</FilterElement>
      <FilterElement clicked={props.clicked}>Burger</FilterElement>
      <FilterElement clicked={props.clicked}>Combo</FilterElement>
      <FilterElement clicked={props.clicked}>Drinks</FilterElement>
    </div>
  );
};

export default filterNavbar;

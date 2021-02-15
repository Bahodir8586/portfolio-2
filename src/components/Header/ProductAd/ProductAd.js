import React from "react";

import * as images from "../../../images";
import classes from "./ProductAd.module.css";

const productAd = (props) => {
  let img = null;
  const classList = [classes.productAd];
  classList.push(classes[props.adType]);
  if (props.adType === "new") {
    img = images.Fire;
  } else if (props.adType === "bestseller") {
    img = images.Rocket;
  }
  console.log(img);
  return (
    <div className={classList.join(" ")}>
      <div className={classes.productAdStatus}>
        <img src={img} alt={img} /> &nbsp; {props.status}
      </div>
      <span className={classes.productAdName}>{props.name}</span>
      <img
        className={classes.productAdImg}
        src={props.imgSrc}
        alt={props.name}
      />
    </div>
  );
};

export default productAd;

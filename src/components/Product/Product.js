import React from "react";

import classes from "./Product.module.css";

const product = (props) => {
  console.log(props.product);
  return (
    <div className={classes.product}>
      <div className={classes.productImage}>
        <img src={props.product.imgSrc} alt={props.product.name} />
      </div>
      <div className={classes.productInfo}>
        <h4>{props.product.name}</h4>
        <p>{props.product.description}</p>
        <div className={classes.productPrice}>{props.product.price} UZS</div>
        <div className={classes.addButton}>+</div>
      </div>
    </div>
  );
};

export default product;

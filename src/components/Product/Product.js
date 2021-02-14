import React from "react";

import classes from "./Product.module.css";

const product = (props) => {
  console.log(props.product);
  return (
    <div>
      <div>
        <img src={props.product.imgSrc} alt={props.product.name} />
      </div>
      <div>
        <h4>{props.product.name}</h4>
        <p>{props.product.description}</p>
        <div>{props.product.price}</div>
        <div>+</div>
      </div>
    </div>
  );
};

export default product;

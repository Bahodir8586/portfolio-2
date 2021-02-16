import React from "react";

import Product from "../Product/Product";
import classes from "./ProductHolder.module.css";

const productHolder = (props) => {
  const products = props.products.map((product) => {
    return <Product key={product.name} product={product} />;
  });
  return (
    <React.Fragment>
      <h3 className={classes.title}>{props.title}</h3>
      <div className={classes.productHolder}>{products}</div>
    </React.Fragment>
  );
};

export default productHolder;

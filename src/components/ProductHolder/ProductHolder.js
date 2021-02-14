import React from "react";

import Product from "../Product/Product";
import classes from "./ProductHolder.module.css";

const productHolder = (props) => {
  //   console.log(props.products);
  const products = props.products.map((product) => {
    return <Product key={product.name} product={product} />;
  });
  return <div className={classes.productHolder}>{products}</div>;
};

export default productHolder;

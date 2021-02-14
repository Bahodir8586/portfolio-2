import React from "react";

import Product from "../Product/Product";

const productHolder = (props) => {
//   console.log(props.products);
  const products = props.products.map((product) => {
    return <Product key={product.name} product={product} />;
  });
  return <div>{products}</div>;
};

export default productHolder;

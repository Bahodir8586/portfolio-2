import React from "react";
import { connect } from "react-redux";

import * as actions from "../../store/actions/actions";
import classes from "./Product.module.css";

const product = (props) => {
  return (
    <div className={classes.product}>
      <div className={classes.productImage}>
        <img src={props.product.imgSrc} alt={props.product.name} />
      </div>
      <div className={classes.productInfo}>
        <h4>{props.product.name}</h4>
        <p>{props.product.description}</p>
        <div className={classes.productPrice}>{props.product.price} UZS</div>
        <div
          className={classes.addButton}
          onClick={() => props.onProductAdded(props.product.name)}
        >
          +
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    onProductAdded: (name) => dispatch(actions.addProduct(name)),
  };
};

export default connect(null, mapDispatchToProps)(product);

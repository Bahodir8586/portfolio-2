import React, { Component } from "react";
import { connect } from "react-redux";

import * as actions from "../../store/actions/actions";
import Backdrop from "../Backdrop/Backdrop";
import OrderRow from "./OrderRow/OrderRow";
import classes from "./Modal.module.css";

class Modal extends Component {
  addProduct = (name) => {
    this.props.addProduct(name);
  };
  removeProduct = (name) => {
    this.props.removeProduct(name);
  };
  orderHandler = () => {
    alert("You ordered !!!");
    this.props.modalClosed();
    this.props.onInitPurchasedProducts(this.props.products);
  };
  render() {
    const products = this.props.purchasedProducts.filter((el) => {
      return el ? el.number > 0 : null;
    });
    let rows = <p className={classes.startOrder}>Order foods from the menu</p>;
    let orderHeader = null;
    let totalPrice = null;
    let orderButton = null;
    if (products.length > 0) {
      orderHeader = (
        <div className={classes.orderRow}>
          <div className={classes.orderRowCol}>
            <strong>Food</strong>
          </div>
          <div className={classes.orderRowCol}>Amount</div>
          <div className={classes.orderRowCol}>Price</div>
          <div className={classes.orderRowCol}></div>
        </div>
      );

      rows = products.map((el) => {
        return (
          <OrderRow
            name={el.name}
            number={el.number}
            price={(el.price * el.number).toFixed(2)}
            add={() => this.addProduct(el.name)}
            remove={() => this.removeProduct(el.name)}
          />
        );
      });

      totalPrice = (
        <p className={classes.totalPrice}>
          Total price: <strong>{this.props.price}</strong>
        </p>
      );

      orderButton = (
        <button className={classes.orderButton} onClick={this.orderHandler}>
          Order
        </button>
      );
    }
    return (
      <React.Fragment>
        <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
        <div
          className={classes.Modal}
          style={{
            transform: this.props.show ? "translateY(0)" : "translateY(-100vh)",
            opacity: this.props.show ? "1" : "0",
          }}
        >
          <h2>Your Order</h2>
          {orderHeader}
          {rows}
          {totalPrice}
          {orderButton}
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.products,
    purchasedProducts: state.purchasedProducts,
    price: state.price,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addProduct: (name) => dispatch(actions.addProduct(name)),
    removeProduct: (name) => dispatch(actions.removeProduct(name)),
    onInitPurchasedProducts: (products) =>
      dispatch(actions.initPurchasedProducts(products)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);

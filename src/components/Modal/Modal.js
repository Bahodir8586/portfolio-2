import React, { Component } from "react";
import { connect } from "react-redux";

import * as actions from "../../store/actions/actions";
import Backdrop from "../Backdrop/Backdrop";
import OrderRow from "./OrderRow/OrderRow";
import classes from "./Modal.module.css";

class Modal extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return (
      nextProps.show !== this.props.show ||
      nextProps.children !== this.props.children
    );
  }
  addProduct = (name) => {
    this.props.addProduct(name);
  };
  removeProduct = (name) => {
    this.props.removeProduct(name);
  };
  render() {
    const products = this.props.products.filter((el) => {
      return el ? el.number > 0 : null;
    });
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
          {products.map((el) => {
            return (
              <OrderRow
                name={el.name}
                number={el.number}
                price={(el.price * el.number).toFixed(2)}
                add={() => this.addProduct(el.name)}
                remove={() => this.removeProduct(el.name)}
              />
            );
          })}
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.purchasedProducts,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addProduct: (name) => dispatch(actions.addProduct(name)),
    removeProduct: (name) => dispatch(actions.removeProduct(name)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);

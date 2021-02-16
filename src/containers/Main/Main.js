import React, { Component } from "react";
import { connect } from "react-redux";

import * as actions from "../../store/actions/actions";
import Modal from "../../components/Modal/Modal";
import FilterNavbar from "../../components/FilterNavbar/FilterNavbar";
import ProductHolder from "../../components/ProductHolder/ProductHolder";

class Main extends Component {
  state = {
    filter: "all",
    filteredProducts: [],
  };
  componentDidMount() {
    this.props.onInitProducts();
    this.filterProduct("all");
  }

  filterProduct = (type) => {
    let filteredProducts = [];
    if (type !== "all") {
      filteredProducts = this.props.products.filter((el) => {
        return el.type === type;
      });
    } else {
      filteredProducts = this.props.products;
    }
    this.setState({ filteredProducts: [...filteredProducts], filter: type });
  };
  onNavbarClickHandler = (e) => {
    const type = e.target.innerText.toLowerCase();
    this.filterProduct(type);
  };

  render() {
    return (
      <main>
        <FilterNavbar clicked={(e) => this.onNavbarClickHandler(e)} />
        <ProductHolder
          products={this.state.filteredProducts}
          title={this.state.filter}
        />
        <Modal
          show={this.props.purchasing}
          modalClosed={this.props.purchaseCanceled}
        ></Modal>
      </main>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.products,
    purchasedProducts: state.purchasedProducts,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onInitProducts: () => dispatch(actions.initProducts()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);

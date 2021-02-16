import React, { Component } from "react";

import Header from "./components/Header/Header";
import Main from "./containers/Main/Main";
import BeforeFooter from "./components/BeforeFooter/BeforeFooter";
import Footer from "./components/Footer/Footer";

import "./App.css";

class App extends Component {
  state = {
    purchasing: false,
  };
  purchaseHandler = () => {
    this.setState({ purchasing: true });
  };

  purchaseCanceled = () => {
    this.setState({ purchasing: false });
  };
  render() {
    return (
      <div>
        <Header purchasing={this.purchaseHandler} />
        <Main
          purchasing={this.state.purchasing}
          purchaseCanceled={this.purchaseCanceled}
        />
        <BeforeFooter />
        <Footer />
      </div>
    );
  }
}

export default App;

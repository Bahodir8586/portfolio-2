import React, { Component } from "react";

import Header from "./components/Header/Header";
import Main from "./containers/Main/Main";
import BeforeFooter from "./components/BeforeFooter/BeforeFooter";
import Footer from "./components/Footer/Footer";

import "./App.css";

class App extends Component {
  state = {};
  render() {
    return (
      <div>
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;

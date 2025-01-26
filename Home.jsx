import React, { Component } from "react";
import HeaderComponent from "./HeaderComponent";
import MainComponent from "./MainComponent";
import FooterComponent from "./FooterComponent";

class Home extends Component {
  render() {
    return (
      <div>
        <HeaderComponent />
        <MainComponent />
        <FooterComponent />
      </div>
    );
  }
}

export default Home;

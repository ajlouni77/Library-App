import React, { Component } from "react";

class FooterComponent extends Component {
  render() {
    return (
      <footer
        style={{
          background: "#f4f4f4",
          padding: "10px",
          textAlign: "center",
          marginTop: "20px",
        }}
      >
        <p>&copy; 2025 Library App</p>
      </footer>
    );
  }
}

export default FooterComponent;

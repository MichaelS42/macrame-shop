import React, { Component } from "react";

export default class MainContent extends Component {
  state = {
    appTitle: "Customers",
  };
  render() {
    return (
      <div>
        <h3 className="border-bottom m-1 p1">{this.state.appTitle}</h3>
      </div>
    );
  }
}

import React, { Component } from "react";
import "./Display.css";

class Display extends Component {
  constructor(props) {
    super(props);
    this.state ={}
  }

  update(data) {
    this.setState({ firstName: data.firstName });
  }

  render() {
    console.log(this.props);
    const { firstName, middleName, lastName } = this.props;

    return (
      <div>
        <header>{firstName}</header>
        <header>{middleName}</header>
      </div>
    );
  }
}

export default Display;

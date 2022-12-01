import React, { Component } from "react";
import "./Display.css";

class Display extends Component {
  constructor(props) {
    super(props);
    this.state ={}
  }

  render() {
    console.log(this.props);
    const { 
      firstName, 
      middleName, 
      lastName,
      street,
      state,
      zip
     } = this.props;

    return (
      <div className="container">
        <div className="name">{firstName} {middleName} {lastName}</div>
        <div className="address">{street} {state} {zip}</div>
 
      </div>
    );
  }
}

export default Display;

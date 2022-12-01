import React, { Component } from "react";
import "./Display.css";

class Display extends Component {
  constructor(props) {
    super(props);
    this.state ={}
  }

  render() {
    console.log(this.props);
    let { 
      firstName, 
      middleName, 
      lastName,
      street,
      city,
      usstate,
      zip,
      email,
      phone,
      website
     } = this.props;

    if (street) {
      street = street+',';
    }
    if (city) {
      city = city+',';
    }

    return (
      <div className="container">
        <div className="name">{firstName} {middleName} {lastName}</div>
        <div className="address">{street} {city} {usstate} {zip}</div>
        <div className="contact"><div>{email}</div> <div>{phone}</div> <div>{website}</div></div>
      </div>
    );
  }
}

export default Display;

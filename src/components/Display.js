import React, { Component } from "react";
import "./Display.css";

class Display extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      firstName: props.firstName,
      middleName: '',
      lastName: ''
     }
  }

  update(info) {
    this.setState({
      firstName: info.firstName
    })
  }


  render() {
    return (
        <header >{this.props.firstName}</header>
    );
  }
}

export default Display;

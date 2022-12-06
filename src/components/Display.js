import React, { Component } from "react";
import "./Display.css";
import DisplayEducation from "./DisplayEducation";
import DisplayPersonalInfo from "./DisplayPersonalInfo";
import DisplayWork from "./DisplayWork";

class Display extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {

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
    }  = this.props.personalInfo;

    if (city) {
      city = city + ",";
    }


    return (
      <div>
        <DisplayPersonalInfo 
          firstName = {firstName}
          middleName = {middleName}
          lastName = {lastName}
          street = {street}
          city = {city}
          usstate = {usstate}
          zip = {zip}
          email = {email}
          phone = {phone}
          website = {website}
        />
       <DisplayEducation
        educationInfo = {this.props.educationInfo}
       />
       <DisplayWork
         workInfo= {this.props.workInfo}
       />
      </div>
    );
  }
}

export default Display;



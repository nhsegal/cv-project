import React, { Component } from "react";
import "./Display.css";

class Display extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    // console.log(this.props);
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
      website,
      yearStart,
      yearEnd,
      institution,
      degree,
      field,
      edBullets
    } = this.props;

    if (street) {
      street = street + ",";
    }
    if (city) {
      city = city + ",";
    }

    if (yearStart && yearEnd) {
      yearStart = yearStart +"-";
    }


    if (degree && field) {
      field = " in " + field
    }

    return (
      <div className="container">
        <div className="personal-info">
          <div className="name">
            {firstName} {middleName} {lastName}
          </div>
          <div className="address">
            {street} {city} {usstate} {zip}
          </div>
          <div className="contact">
            <div>{email}</div> <div>{phone}</div> <div>{website}</div>
          </div>
        </div>
        <div className="education-info">
            <div className="heading">Education:</div>
            <div className="ed-row">
              <div>{yearStart}{yearEnd} </div>
              <div>
                <span className="degree">{degree}</span><span>{field} </span>
              </div>
              <div>
                <span>{institution}</span>  
              </div>
            </div> 
          <div> {edBullets}</div>
  
        </div>
      </div>
    );
  }
}

export default Display;

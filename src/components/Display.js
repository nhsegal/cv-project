import React, { Component } from "react";
import "./Display.css";
import DisplayPersonalInfo from "./DisplayPersonalInfo";

class Display extends Component {
  constructor(props) {
    super(props);
    this.state = {};
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
    }  = this.props.personalInfo;

    

    let {personalInfo} = this.props.personalInfo
    let arrayOfEdInfo = [...this.props.educationInfo];

    /*
    let {
      yearStart,
      yearEnd,
      institution,
      degree,
      field,
      edBullets,
    } = this.props.educationInfo[0]
  

    if (street) {
      street = street + ",";
    }
    if (city) {
      city = city + ",";
    }
*/
    /*
    if (yearStart && yearEnd) {
      yearStart = yearStart + "-";
    }

    if (degree && field) {
      field = " in " + field;
    }
*/
    return (
      <div className="container">
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
       
       
       
      </div>
    );
  }
}

export default Display;

{
  /*
 



        {
          (yearStart || institution) ? 
          <div className="education-info-display">
          <div className="heading">Education:</div>
          <div className="ed-row">
            <div>
              {yearStart}
              {yearEnd}{" "}
            </div>
            <div>
              <span className="degree">{degree}</span>
              <span>{field} </span>
            </div>
            <div>
              <span>{institution}</span>
            </div>
          </div>
          <div>
            <ul>
              {edBullets && edBullets[0] !== ""
                ? edBullets.map((term) => <li key={term}>{term}</li>)
                : null}
            </ul>
        

          </div>
        </div> : null
        }
        */
}

import React, { Component } from "react";
import "./Display.css";

class Display extends Component {
  constructor(props) {
    super(props);
    /*
    this.state = {
      personalInfo: {
        firstName: {},
        middleName: {},
        lastName: {},
        street: {},
        city: {},
        usstate: {},
        zip: {},
        email: {},
        phone: {},
        website: {}
      },
      educationInfo: []
    };
    */
  }

  render() {
    console.log(this.props)
    /*
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
     
    } = this.props.personalInfo;

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

    if (yearStart && yearEnd) {
      yearStart = yearStart + "-";
    }

    if (degree && field) {
      field = " in " + field;
    }
*/
    return (

      <div>Hi</div>
      /*
      <div className="container">
        <div className="personal-info-display">
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
        {/*    <ul>
              {edBullets && edBullets[0] !== ""
                ? edBullets.map((term) => <li key={term}>{term}</li>)
                : null}
            </ul>
        }

          </div>
        </div> : null
        }
        
      </div>
      */
    )
  }
}

export default Display;

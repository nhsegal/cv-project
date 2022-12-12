import React from "react";
import "./Display.css";
import DisplayEducation from "./DisplayEducation";
import DisplayPersonalInfo from "./DisplayPersonalInfo";
import DisplayWork from "./DisplayWork";

const Display = (props) => {

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
      personalText
    }  = props.personalInfo;

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
          personalText = {personalText}
        />
       <DisplayEducation
        educationInfo = {props.educationInfo}
       />
       <DisplayWork
         workInfo= {props.workInfo}
       />
      </div>
    );
  
}

export default Display;



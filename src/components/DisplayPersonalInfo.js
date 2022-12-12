import React from "react";
const DisplayPersonalInfo = (props) => {
    
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
    } = props;
    
    console.log(props)
    return (
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
        <div className="personal-text">{personalText}</div>
      </div>
    );
  
}

export default DisplayPersonalInfo;

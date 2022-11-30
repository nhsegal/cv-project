import React, { Component } from "react";
import "./Form.css";

class PersonalInfo extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
        <form >
          <input type={'text'} placeholder='First Name' name='first-name' className="first-name"></input>
          <input type={'text'} placeholder='Middle Name' name='middle-name' className="middle-name"></input>
          <input type={'text'} placeholder='Last Name' name='last-name' className="last-name"></input>
          <input type={'email'} placeholder='Email Address' name='email' className="email"></input>
          <input type={'tel'} placeholder='Phone Number' name='phone' className="phone"></input>
          <input type={'url'} placeholder='Website' name='website' className="website"></input>
          <input type={'text'} placeholder='Mailing Address' name='street' className="street"></input>
          <input type={'text'} placeholder='State' name='state' className="state"></input>
          <input type={'text'} placeholder='ZIP Code' name='zip' className="zip"></input>
        </form>
 
    );
  }
}

export default PersonalInfo;

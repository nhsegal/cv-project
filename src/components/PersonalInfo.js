import React, { Component } from "react";
import "./Form.css";

class PersonalInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <form
          autoComplete="new-password"
          onSubmit={this.props.onSubmitPersonal}>
          <div className="row">
            <div className="section-head">Personal Information:</div>
          </div>
          <div className="row name">
            <input
              type={"text"}
              placeholder="First Name"
              name="first-name"
              autoComplete="off"
            />
            <input
              type={"text"}
              placeholder="Middle Name"
              name="middle-name"
              autoComplete="off"
            />
            <input
              type={"text"}
              placeholder="Last Name"
              name="last-name"
              autoComplete="off"
            />
          </div>

          <div className="row address">
            <input
              type={"text"}
              placeholder="Street Address"
              name="street"
              className="street"
              autoComplete="off"
            />
            <input
              type={"text"}
              placeholder="City"
              name="city"
              className="city"
              autoComplete="off"
            />
            <input
              type={"text"}
              placeholder="State"
              name="state"
              className="state"></input>
            <input
              type={"text"}
              placeholder="ZIP Code"
              name="zip"
              className="zip"></input>
          </div>

          <div className="row">
            <input
              type={"email"}
              placeholder="Email Address"
              name="email"
              className="email"></input>
            <input
              type={"tel"}
              placeholder="Phone Number"
              name="phone"
              className="phone"></input>
            <input
              type={"text"}
              placeholder="Website"
              name="website"
              className="website"></input>
          </div>

          <button type={"submit"}>Submit</button>
        </form>
      </div>
    );
  }
}

export default PersonalInfo;

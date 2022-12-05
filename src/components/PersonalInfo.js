import React, { Component } from "react";
import "./PersonalInfo.css";

class PersonalInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <form
          className="personal-info"
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
              defaultValue="Jane"
            />
            <input
              type={"text"}
              placeholder="Middle Name"
              name="middle-name"
              autoComplete="off"
              defaultValue="Q."
            />
            <input
              type={"text"}
              placeholder="Last Name"
              name="last-name"
              autoComplete="off"
              defaultValue="Doe"
            />
          </div>

          <div className="row address">
            <input
              type={"text"}
              placeholder="Street Address"
              name="street"
              className="street"
              autoComplete="off"
              defaultValue="123 Main St."
            />
            <input
              type={"text"}
              placeholder="City"
              name="city"
              className="city"
              autoComplete="off"
              defaultValue="Gotham"
            />
            <input
              type={"text"}
              placeholder="State"
              name="state"
              className="state"
              defaultValue="NY"
            />
            <input
              type={"text"}
              placeholder="ZIP Code"
              name="zip"
              className="zip"
              defaultValue="10024"
            />
          </div>

          <div className="row">
            <input
              type={"email"}
              placeholder="Email Address"
              name="email"
              className="email"
              defaultValue="jane@speedmail.com"
            />

            <input
              type={"tel"}
              placeholder="Phone Number"
              name="phone"
              className="phone"
              defaultValue="(212) 555-1234"
            />
            <input
              type={"text"}
              placeholder="Website"
              name="website"
              className="website"
              defaultValue="www.janethebrain.com"
            />
          </div>

          <button type={"submit"}>Update Personal Information</button>
        </form>
      </div>
    );
  }
}

export default PersonalInfo;

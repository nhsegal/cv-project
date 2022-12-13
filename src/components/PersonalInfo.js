import React from "react";
import "./PersonalInfo.css";

const PersonalInfo = (props) => {
  return (
    <div>
      <form
        className="personal-info"
        name = "personal-info"
        autoComplete="new-password"
        onSubmit={props.onSubmitPersonal}>
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
            className="first-name"
          />
          <input
            type={"text"}
            placeholder="Middle Name"
            name="middle-name"
            autoComplete="off"
            defaultValue="Q."
            className="middle-name"
          />
          <input
            type={"text"}
            placeholder="Last Name"
            name="last-name"
            autoComplete="off"
            defaultValue="Doe"
            className="last-name"
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
        <div>
        <textarea 
           width = '90' 
            rows ="12" 
            name= "personal-text"
            id = "personal-text"
            placeholder="Additional text"
            defaultValue="
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc interdum nisi ac diam luctus rhoncus. Proin ornare aliquam nisl, eget faucibus sapien porttitor eget. Donec vel arcu eget justo ultrices.
            "         
            />
        </div>

        <button type={"submit"} className="submitBtn">
          Update Personal Information
        </button>
      </form>
    </div>
  );
};

export default PersonalInfo;

import "./App.css";

import React, { Component } from "react";
import Header from "./components/Header";
import Display from "./components/Display";
import PersonalInfo from "./components/PersonalInfo";

class App extends Component {
  constructor() {
    super();
    this.state = {
      personalInfo: {},
    };

    this.submitPersonalInfo = this.submitPersonalInfo.bind(this);
  }

  submitPersonalInfo = (ev) => {
    ev.preventDefault();
    let firstName = ev.target["first-name"].value;
    let middleName = ev.target["middle-name"].value;
    let lastName = ev.target["last-name"].value;

    let street = ev.target["street"].value;
    let usstate = ev.target["state"].value;
    let city = ev.target["city"].value;
    let zip = ev.target["zip"].value;

    let email = ev.target["email"].value;
    let phone= ev.target["phone"].value;
    let website = ev.target["website"].value;
    /*
    let newFirstName = ev.target["first-name"].value;
    let newMiddleName = ev.target["middle-name"].value;
    let newLastName = ev.target["last-name"].value;

    let newStreet = ev.target["street"].value;
    let newState = ev.target["state"].value;
    let newCity = ev.target["city"].value;
    let newZip = ev.target["zip"].value;

    let newEmail = ev.target["email"].value;
    let newPhone= ev.target["phone"].value;
    let newWebsite = ev.target["website"].value;
*/

    this.setState((state, props) => ({
      personalInfo: {
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
      },
    }));

    console.log(this.state);
  };

  render() {
    const { firstName, middleName, lastName, street, city, usstate, zip, email, phone, website } =
      this.state.personalInfo;
    return (
      <div>
        <Header />
        <div className="App">
          <PersonalInfo onSubmitPersonal={this.submitPersonalInfo} />

          <Display
            firstName={firstName}
            middleName={middleName}
            lastName={lastName}
            street={street}
            city = {city}
            usstate={usstate}
            zip={zip}
            email = {email}
            phone = {phone}
            website={website}
          />
        </div>
      </div>
    );
  }
}

export default App;

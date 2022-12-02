import "./App.css";

import React, { Component } from "react";
import Header from "./components/Header";
import Display from "./components/Display";
import PersonalInfo from "./components/PersonalInfo";
import Education from "./components/Education";

class App extends Component {
  constructor() {
    super();
    this.state = {
      personalInfo: {},
      educationInfo: {}
    };

    this.submitPersonalInfo = this.submitPersonalInfo.bind(this);
    this.submitEducationInfo = this.submitEducationInfo.bind(this);
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
    let phone = ev.target["phone"].value;
    let website = ev.target["website"].value;

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
        website,
      },
    }));

    console.log(this.state);
  };

  submitEducationInfo = (ev) => {
    ev.preventDefault();
    let yearStart = ev.target["year-start"].value;
    let yearEnd = ev.target["year-end"].value;
    let institution = ev.target["institution"].value;
    let degree = ev.target["degree"].value;
    let field = ev.target["field"].value;
    let edBullets = ev.target["bullets"].value.split("\n");

    this.setState((state, props) => ({
      educationInfo: {
        yearStart,
        yearEnd,
        institution,
        degree,
        field,
        edBullets
      },
    }));

    console.log(this.state);
   
  };

  render() {
    const {
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
    } = this.state.personalInfo;
    const { yearStart, yearEnd, institution, degree, field, edBullets } =
      this.state.educationInfo;
    return (
      <div>
        <Header />
        <div className="App">
          <div>
          <PersonalInfo onSubmitPersonal={this.submitPersonalInfo} />
          <Education onSubmitEducation={this.submitEducationInfo}/>
          </div>
        

          <Display
            firstName={firstName}
            middleName={middleName}
            lastName={lastName}
            street={street}
            city={city}
            usstate={usstate}
            zip={zip}
            email={email}
            phone={phone}
            website={website}
            
            yearStart={yearStart}
            yearEnd={yearEnd}
            institution={institution}
            degree={degree}
            field={field}
            edBullets ={edBullets}
            
          />
        </div>
      </div>
    );
  }
}

export default App;

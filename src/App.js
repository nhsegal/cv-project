import React, { Component } from "react";
import Header from "./components/Header";
import Display from "./components/Display";
import PersonalInfo from "./components/PersonalInfo";

class App extends Component {
  constructor() {
    super();
    this.state = {
      personalInfo: {
        firstName: "",
        middleName: "",
        lastName: "",
      },
    };

    this.submitPersonalInfo = this.submitPersonalInfo.bind(this);
  }

  submitPersonalInfo = (ev) => {
    ev.preventDefault();
    let newFirstName = ev.target["first-name"].value;
    let newMiddleName = ev.target["middle-name"].value;
    let newLastName = ev.target["last-name"].value;

    let newStreet = ev.target["street"].value;
    let newState = ev.target["state"].value;
    let newZip = ev.target["zip"].value;

    this.setState((state, props) => ({
      personalInfo: {
        firstName: newFirstName,
        middleName: newMiddleName,
        lastName: newLastName,
        street: newStreet,
        state: newState,
        zip: newZip,
      },
    }));

    console.log(this.state);
  };

  render() {
    const { firstName, middleName, lastName, street, state, zip } =
      this.state.personalInfo;
    return (
      <div className="App">
        <Header />
        <PersonalInfo onSubmitPersonal={this.submitPersonalInfo} />
        <Display 
        firstName ={firstName}
        middleName ={middleName}
        lastName ={lastName} 
        street = {street}
        state = {state}
        zip = {zip}
        />
      </div>
    );
  }
}

export default App;

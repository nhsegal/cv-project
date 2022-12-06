import "./App.css";

import React, { Component } from "react";
import Header from "./components/Header";
import Display from "./components/Display";
import PersonalInfo from "./components/PersonalInfo";
import Education from "./components/Education";
import Work from "./components/Work";

class App extends Component {
  constructor() {
    super();
    this.state = {
      personalInfo: {},
      edRows: 2,
      educationInfo: [{}, {}, {}],
      workRows: 2,
      workInfo: [{},{},{}]
    };
    this.submitPersonalInfo = this.submitPersonalInfo.bind(this);
    this.submitEducationInfo = this.submitEducationInfo.bind(this);
    this.addRow = this.addRow.bind(this);
    this.removeRow = this.removeRow.bind(this);
    this.addWorkRow = this.addWorkRow.bind(this);
    this.removeWorkRow = this.removeWorkRow.bind(this);
    
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
  };

  submitEducationInfo = (ev) => {
    ev.preventDefault();
    const { educationInfo, edRows } = this.state;

    let newEducationInfo = [];
    for (let i = 0; i < edRows; i++) {
      let yearStart = ev.target[`year-start${i}`].value;
      let yearEnd = ev.target[`year-end${i}`].value;
      let institution = ev.target[`institution${i}`].value;
      let degree = ev.target[`degree${i}`].value;
      let field = ev.target[`field${i}`].value;
      let edBullets = ev.target[`bullets${i}`].value.split("\n");
      newEducationInfo.push({
        yearStart,
        yearEnd,
        institution,
        degree,
        field,
        edBullets,
      });
    }

    this.setState(
      (state, props) => ({
        educationInfo: [...newEducationInfo],
      }),
    );
  };

  submitWorkInfo = (ev) => {
    ev.preventDefault();
    const { workInfo, workRows } = this.state;

    let newWorkInfo = [];
    for (let i = 0; i < workRows; i++) {
      let yearStart = ev.target[`year-start${i}`].value;
      let yearEnd = ev.target[`year-end${i}`].value;
      let institution = ev.target[`institution${i}`].value;
      let title = ev.target[`title${i}`].value;
      let workBullets = ev.target[`bullets${i}`].value.split("\n");
      newWorkInfo.push({
        yearStart,
        yearEnd,
        institution,
        title,
        workBullets,
      });
    }

    this.setState(
      (state, props) => ({
        workInfo: [...newWorkInfo],
      }),
    );
  };



  addRow = (ev) => {
    this.setState((state, props)=>({
      edRows: state.edRows+1
    }))
  }

  removeRow = (ev) => {
    if (this.state.edRows > 0) {
      this.setState((state, props)=>({
        edRows: state.edRows-1
    }))
    }
  }

  addWorkRow = (ev) => {
    this.setState((state, props)=>({
      workRows: state.workRows+1
    }))
  }

  removeWorkRow = (ev) => {
    if (this.state.workRows > 0) {
      this.setState((state, props)=>({
        workRows: state.workRows-1
    }))
    }
  }


  render() {
    return (
      <div>
        <Header />
        <div className="App">
          <div>
            <PersonalInfo onSubmitPersonal={this.submitPersonalInfo} />
            <Education
              onSubmitEducation={this.submitEducationInfo}
              edRows={this.state.edRows}
              addRow ={this.addRow}
              removeRow = {this.removeRow}
            />
            <Work
              onSubmitWork={this.submitWorkInfo}
              workRows={this.state.workRows}
              addWorkRow ={this.addWorkRow}
              removeWorkRow = {this.removeWorkRow}
            />
          </div>
          <div className="container">
            <Display
              personalInfo={this.state.personalInfo}
              educationInfo={this.state.educationInfo}
              workInfo={this.state.workInfo}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;

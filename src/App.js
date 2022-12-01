import React, { Component } from "react";
import Header from "./components/Header";
import Display from "./components/Display";
import PersonalInfo from "./components/PersonalInfo";

class App extends Component {
  constructor() {
    super();
    this.state = {
      personalInfo: {
        firstName: '',
        middleName: '',
        lastName: ''
      }
    }

    this.submitPersonalInfo = this.submitPersonalInfo.bind(this);
  }

  submitPersonalInfo = (ev) =>{
    ev.preventDefault();
    let newFirstName = ev.target['first-name'].value;
    let newMiddleName = ev.target['middle-name'].value;
    let newLastName = ev.target['last-name'].value;
   
    this.setState((state, props)=>({
      personalInfo : {
        firstName: newFirstName,
        middleName: newMiddleName,
        lastName: newLastName
      }  
    }));

    console.log(this.state)
  }

  render() {
    return (
      <div className="App">
        <Header/>
        <PersonalInfo onSubmitPersonal= {this.submitPersonalInfo} />
        <Display 
        firstName = {this.state.personalInfo.firstName}
        middleName = {this.state.personalInfo.middleName}
        lastName = {this.state.personalInfo.lastName}
        />
      </div>
    );
  }
}

export default App;

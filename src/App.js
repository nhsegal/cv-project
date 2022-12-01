import React, { Component } from "react";
import Header from "./components/Header";
import PersonalInfo from "./components/PersonalInfo";
import "./App.css";
import Display from "./components/Display";

class App extends Component {
  constructor(props) {
    super();
  }
  render() {
    return (
      <div className="App">
       <Header/>
       <PersonalInfo/>
      </div>
    );
  }
}

export default App;

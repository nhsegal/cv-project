import React, { Component } from "react";
import EducationRow from "./EducationRow";
import uniqid from "uniqid";
import "./Education.css";

class Education extends Component {
  constructor(props) {
    super(props);
    this.state = {
      edHistory: [
        {
          content: '',
          id: uniqid()
        }
      ]
    };
  }

  addRow() {
    let newRow = {}
    this.setState(prevState => ({
      edHistory: [...prevState.edHistory, newRow]
    }))
  }

  render() {
    return (
      <div>
        <form
          className="ed-info"
          autoComplete="new-password"
          name = "ed-form"
          id = "ed-form"
          onSubmit={this.props.onSubmitEducation}>
          <div className="row">
            <div className="section-head">Education:</div>
          </div>

          { this.state.edHistory.map((item, index)=>
          <EducationRow id = {index} key={index}/>
           ) }
           {
          //<EducationRow id = {this.state.edHistory[0].id}/>
           }

          <div className="row">
          <button type={"button"}>Add Row</button>
          <button type={"button"}>Remove Row</button>
          </div>
          <button type={"submit"}>Submit</button>
        </form>
      </div>
    );
  }
}

export default Education;

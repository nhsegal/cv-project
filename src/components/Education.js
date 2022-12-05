import React, { Component } from "react";
import EducationRow from "./EducationRow";
import "./Education.css";

class Education extends Component {
  constructor(props) {
    super(props);
    this.state = {
      edRows: props.edRows,
      edHistory: [
        {
          content: '',
        }
      ]
    };
  }

  /*
  addRow() {
    let newRow = {}
    this.setState(prevState => ({
      edHistory: [...prevState.edHistory, newRow]
    }))
  }
*/
  render() {
    let defaults = [
      {
      defaultStart: 2000,
      defaultEnd: 2004,
      defaultField: "Physics",
      defaultDegree: "BA",
      defaultInstitution: "Mugworts Tech",
      defaultBullets: 
        "2003 Class President\n4.0 GPA"
    },
    {
      defaultStart: 2004,
      defaultEnd: 2008,
      defaultField: "Math",
      defaultDegree: "PhD",
      defaultInstitution: "Mannerford University",
      defaultBullets: 
        "Doctoral Thesis: 'A Concise Proof of the Riemann Hypothesis'"
    },
  ]

    let edRows = [];
    let rowNumber = this.state.edRows;
    for (let i = 0; i<rowNumber; i++){
      edRows.push(i);
    }
    return (
      <div>
        <form
          className="ed-info"
          autoComplete="new-password"
          name = "ed-form"
          id = "ed-form"
          onSubmit={this.props.onSubmitEducation}>

            <div className="section-head">Education:</div>
  
          {edRows.map( i  =>  <EducationRow 
          id = {i} 
          key={i} 
          default = {{...defaults[i]}} /> )}

          <div className="row">
          <button type={"button"}>Add Row</button>
          <button type={"button"}>Remove Row</button>
          </div>
          <button type={"submit"}>Update Education</button>
        </form>
      </div>
    );
  }
}

export default Education;

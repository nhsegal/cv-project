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
          <div className="row">
            <div className="section-head">Education:</div>
          </div>
          {edRows.map( i  =>  <EducationRow id = {i} key={i}/> )}

{/*
          { this.state.edHistory.map((item, index)=>
          <EducationRow id = {index} key={index}/>
           ) }
          */
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

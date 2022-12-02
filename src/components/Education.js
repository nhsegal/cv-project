import React, { Component } from "react";
import "./Form.css";

class Education extends Component {
  constructor(props) {
    super(props);
    this.state = {
      edHistory: []
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
          autoComplete="new-password"
          name = "ed-form"
          id = "ed-form"
          onSubmit={this.props.onSubmitEducation}>
          <div className="row">
            <div className="section-head">Education:</div>
          </div>
          <div className="row">
            <input
              type={"number"} min={"1900"} max={"2099"} step={"1"} 
              placeholder="Start"
              name="year-start"
              autoComplete="off"
            />
            <input
              type={"number"} min={"1900"} max={"2099"} step={"1"} 
              placeholder="End"
              name="year-end"
              autoComplete="off"
            />
            <input
              type={"text"}
              placeholder="Institution"
              name="institution"
              autoComplete="off"
            />
            <input
              type={"text"}
              placeholder="Degree"
              name="degree"
              autoComplete="off"
            />
            <input
              type={"text"}
              placeholder="Field"
              name="field"
              autoComplete="off"
            />
          </div>
          <div className="row">
            <textarea 
            cols="90" 
            rows ="10" 
            name="bullets" 
            id = "bullets"
            form = "ed-form" 
            placeholder="Additional bullet points"
            ></textarea></div>
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

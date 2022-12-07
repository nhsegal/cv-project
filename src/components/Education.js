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
          content: "",
        },
      ],
    };
  }

  render() {
    let defaults = [
      {
        defaultStart: 2000,
        defaultEnd: 2004,
        defaultField: "Physics",
        defaultDegree: "BA",
        defaultInstitution: "Mugworts Tech",
        defaultBullets: "2003 Class President\n4.0 GPA",
      },
      {
        defaultStart: 2004,
        defaultEnd: 2008,
        defaultField: "Math",
        defaultDegree: "PhD",
        defaultInstitution: "Mannerford University",
        defaultBullets:
          "Doctoral Thesis: 'A Concise Proof of the Riemann Hypothesis'",
      },
    ];

    let edArr = [];
    let rowNumber = this.props.edRows;
    for (let i = 0; i < rowNumber; i++) {
      edArr.push(i);
    }

    return (
      <div>
        <form
          className="ed-info"
          autoComplete="new-password"
          name="ed-form"
          id="ed-form"
          onSubmit={this.props.onSubmitEducation}>
          <div className="ed-container">
            <div className="section-head">Education:</div>
            <div className="buttons">
              <button type={"button"} onClick={this.props.addRow}>
                Add Row
              </button>
              <button type={"button"} onClick={this.props.removeRow}>
                Remove Row
              </button>
            </div>
            {edArr.map((i) => (
              <EducationRow id={i} key={i} default={{ ...defaults[i] }} />
            ))}
          </div>

          <button className="buttons" type={"submit"}>
            Update Education
          </button>
        </form>
      </div>
    );
  }
}

export default Education;

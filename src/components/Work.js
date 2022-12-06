import React, { Component } from "react";
import WorkRow from "./WorkRow";
import "./Work.css";

class Work extends Component {
  constructor(props) {
    super(props);
    this.state = {
      workRows: props.workRows,
      workHistory: [
        {
          content: "",
        },
      ],
    };
  }

  render() {
    let defaults = [
      {
        defaultStart: 2008,
        defaultEnd: 2010,
        defaultTitle: "Junior Researcher",
        defaultInstitution: "OmniLab",
        defaultBullets: "Awarded 5 patents",
      },
      {
        defaultStart: 2010,
        defaultEnd: 2012,
        defaultTitle: "Senior Researcher",
        defaultInstitution: "Robotechtronix",
        defaultBullets: "Oversaw a team of 12 researchers",
      },
    ];

    let workArr = [];
    let rowNumber = this.props.workRows;
    for (let i = 0; i < rowNumber; i++) {
      workArr.push(i);
    }

    return (
      <div>
        HELLO!
        <form
          className="work-info"
          autoComplete="new-password"
          name="work-form"
          id="work-form"
          onSubmit={this.props.onSubmitWork}>
            <div className="section-head">Experience:</div>
            <div className="buttons">
            <button type={"button"} onClick={this.props.addWorkRow}>
              Add Row
            </button>
            <button type={"button"} onClick={this.props.removeWorkRow}>
              Remove Row
            </button>
          </div>
          {workArr.map((i) => (
            <WorkRow id={i} key={i} default={{ ...defaults[i] }} />
          ))}
          <button className="buttons" type={"submit"}>Update Experience</button>
        </form>
      </div>
    );
  }
}

export default Work;

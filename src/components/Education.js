import React from "react";
import EducationRow from "./EducationRow";
import "./Education.css";

const Education = (props) => {
  
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
        "Doctoral Thesis: 'A Concise Proof of the Riemann Hypothesis'\nTaught 'Intro. Algebraic Geometry' and 'Advanced Calculus'",
    },
  ];

  let edArr = [];
  let rowNumber = props.edRows;
  for (let i = 0; i < rowNumber; i++) {
    edArr.push(i);
  }

  return (
    <div className="ed-container">
      <div className="section-head">Education:</div>
      <div className="buttons">
        <button type={"button"} onClick={props.addRow}>
          Add Row
        </button>
        <button type={"button"} onClick={props.removeRow}>
          Remove Row
        </button>
      </div>
      <form
        className="ed-info"
        autoComplete="new-password"
        name="ed-form"
        id="ed-form"
        onSubmit={props.onSubmitEducation}>
        <div>
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
};

export default Education;

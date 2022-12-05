import React, { Component } from "react";
import BulletPoints from "./BulletPoints";
import "./DisplayEducation.css";
class DisplayEducation extends Component {
  render() {
    let polishedEdInfo = [...this.props.educationInfo];
    
    polishedEdInfo.map((item) => {
      if (item.yearStart && item.yearEnd && item.yearStart[item.yearStart.length-1] !== '-') {
        item.yearStart = item.yearStart + "-";
      }
      if (item.degree && item.field && item.field[0] !== ' ') {
        item.field = " in " + item.field;
      }
    });

    return polishedEdInfo[0].yearStart || polishedEdInfo[0].institution ? (
      <div className="education-info-display">
        <div className="heading">Education:</div>

        {polishedEdInfo.map((item, index) => (
          <div key={index} className="ed-entry">
            <div className="ed-row">
              <div>
                {item.yearStart}
                {item.yearEnd}
              </div>
              <div>
                <span className="degree">{item.degree}</span>{" "}
                <span>{item.field} </span>
              </div>
              <div>
                <span>{item.institution}</span>
              </div>
            
            </div>
            <div className="ed-bullets">
            <BulletPoints bullets = {item.edBullets}/>
            </div>
        
          </div>
        ))}
      </div>
    ) : null;
  }
}

export default DisplayEducation;

{
  /*
(yearStart || institution) ? 
<div className="education-info-display">
<div className="heading">Education:</div>
<div className="ed-row">
  <div>
    {yearStart}
    {yearEnd}{" "}
  </div>
  <div>
    <span className="degree">{degree}</span>
    <span>{field} </span>
  </div>
  <div>
    <span>{institution}</span>
  </div>
</div>
<div>
  <ul>
    {edBullets && edBullets[0] !== ""
      ? edBullets.map((term) => <li key={term}>{term}</li>)
      : null}
  </ul>
</div>
</div> : null
}
*/
}

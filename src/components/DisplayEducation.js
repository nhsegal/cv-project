import React, { Component } from "react";

class DisplayEducation extends Component {
  render() {
   // console.log(this.props);
    /*
    let rows = [
      {},
      {},
    ]

    let {
      yearStart,
      yearEnd,
      institution,
      degree,
      field,
      edBullets,
    } = this.props
*/
    return (
      <div className="education-info-display">
        {/*
        {this.props.arrayOfEdInfo.map((item, index) => (
          <div key={index}>
            {item.yearStart} {item.yearEnd}
          </div>
        ))}
        */}
      </div>
    );
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

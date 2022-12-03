import React, { Component } from "react";

class DisplayEducation extends Component {
  render(){
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



    return(
      {
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
      



      <div>
       {rows.map(()=>(
        

       ))} 
      </div>
    )
  }
}

export default DisplayEducation
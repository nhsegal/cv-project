import React, { Component } from "react";
import "./Education.css";

class EducationRow extends Component {
  constructor(props) {
    super(props);
    this.state = {}     
  }

  render(){
    const {id} = this.props;
    return (
      <div>
           <div className="row">
            <input
              type={"number"} min={"1900"} max={"2099"} step={"1"} 
              placeholder="Start"
              name={`year-start${id}`}
              autoComplete="off"
              data-id={id}
            />
            <input
              type={"number"} min={"1900"} max={"2099"} step={"1"} 
              placeholder="End"
              name={`year-end${id}`}
              autoComplete="off"
              data-id={id}
            />
            <input
              type={"text"}
              placeholder="Institution"
              name={`institution${id}`}
              autoComplete="off"
              data-id={id}
            />
            <input
              type={"text"}
              placeholder="Degree"
              name={`degree${id}`}
              autoComplete="off"
              data-id={id}
            />
            <input
              type={"text"}
              placeholder="Field"
              name={`field${id}`}
              autoComplete="off"
              data-id={id}
            />
          </div>
          <div className="row">
            <textarea 
            cols="90" 
            rows ="10" 
            name={`bullets${id}`}
            id = "bullets"
            form = "ed-form" 
            placeholder="Additional bullet points"
            data-id={id}
            ></textarea></div>
      </div>
    )
  }
}

export default EducationRow
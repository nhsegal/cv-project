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
              defaultValue={this.props.default.defaultStart}
            />
            <input
              type={"number"} min={"1900"} max={"2099"} step={"1"} 
              placeholder="End"
              name={`year-end${id}`}
              autoComplete="off"
              data-id={id}
              defaultValue={this.props.default.defaultEnd}
            />
            <input
              type={"text"}
              placeholder="Institution"
              name={`institution${id}`}
              autoComplete="off"
              data-id={id}
              defaultValue={this.props.default.defaultInstitution}
            />
            <input
              type={"text"}
              placeholder="Degree"
              name={`degree${id}`}
              autoComplete="off"
              data-id={id}
              defaultValue={this.props.default.defaultDegree}
            />
            <input
              type={"text"}
              placeholder="Field"
              name={`field${id}`}
              autoComplete="off"
              data-id={id}
              defaultValue={this.props.default.defaultField}
            />
          </div>
          <div className="row comment">
            <textarea 
            cols="90" 
            rows ="12" 
            name={`bullets${id}`}
            id = "bullets"
            form = "ed-form" 
            placeholder="Additional bullet points"
            data-id={id}
            defaultValue={this.props.default.defaultBullets}
            ></textarea></div>
      </div>
    )
  }
}

export default EducationRow
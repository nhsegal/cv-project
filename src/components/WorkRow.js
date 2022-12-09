import React from "react";
import "./Work.css";

const WorkRow = (props) => {

    const {id} = props;
    return (
      <div>
           <div className="row">
            <input
              type={"number"} min={"1900"} max={"2099"} step={"1"} 
              placeholder="Start"
              name={`year-start${id}`}
              autoComplete="off"
              data-id={id}
              defaultValue={props.default.defaultStart}
            />
            <input
              type={"number"} min={"1900"} max={"2099"} step={"1"} 
              placeholder="End"
              name={`year-end${id}`}
              autoComplete="off"
              data-id={id}
              defaultValue={props.default.defaultEnd}
            />
            <input
              type={"text"}
              placeholder="Employer"
              name={`institution${id}`}
              autoComplete="off"
              data-id={id}
              defaultValue={props.default.defaultInstitution}
            />
            <input
              type={"text"}
              placeholder="Job Title"
              name={`title${id}`}
              autoComplete="off"
              data-id={id}
              defaultValue={props.default.defaultTitle}
            />
          </div>
          <div className="row comment">
            <textarea 
            cols="90" 
            rows ="12" 
            name={`bullets${id}`}
            id = "bullets"
            form = "work-form" 
            placeholder="Additional bullet points"
            data-id={id}
            defaultValue={props.default.defaultBullets}
            ></textarea></div>
      </div>
    )
  
}

export default WorkRow
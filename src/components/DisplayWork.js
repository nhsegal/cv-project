import React, { Component } from "react";
import BulletPoints from "./BulletPoints";
import "./DisplayWork.css";
class DisplayWork extends Component {
  render() {
    let polishedWorkInfo = [...this.props.workInfo];
    polishedWorkInfo.map((item) => {
      if (
        item.yearStart &&
        item.yearEnd &&
        item.yearStart[item.yearStart.length - 1] !== "-"
      ) {
        item.yearStart = item.yearStart + "-";
      }
    });

    return polishedWorkInfo[0].yearStart || polishedWorkInfo[0].institution ? (
      <div className="work-info-display">
        <div className="heading">Experience:</div>

        {polishedWorkInfo.map((item, index) => (
          <div key={index} className="work-entry">
            <div className="work-row">
              <div>
                {item.yearStart}
                {item.yearEnd}
              </div>
              <div>
                <span className="title">{item.title}</span>
              </div>
              <div>
                <span>{item.institution}</span>
              </div>
            </div>
            <div className="work-bullets">
              <BulletPoints bullets={item.workBullets} />
            </div>
          </div>
        ))}
      </div>
    ) : null;
  }
}

export default DisplayWork;

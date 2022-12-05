import React, { Component } from "react";

class BulletPoints extends Component {
  render() {
    console.log(this.props)
    if (this.props.bullets[0] != ''){
      return (
        <ul>
          {this.props.bullets.map((point, index) => (
            <li key = {index+100} >{point}</li>
          ))}
        </ul>
      );
    }
    return (
      <div></div>
    )
   
  }
}

export default BulletPoints;

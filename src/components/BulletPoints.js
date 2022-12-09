import React from "react";

const BulletPoints = (props) => {
    if (props.bullets[0] != ''){
      return (
        <ul>
          {props.bullets.map((point, index) => (
            <li key = {index+100} >{point}</li>
          ))}
        </ul>
      );
    }
    return (
      <div></div>
    )
   
  
}

export default BulletPoints;

import React from "react";
import "./Die.css";
const Die = (props) => {
  return (
    <div className="die-face">
      <h2 className="dice-num">{props.value}</h2>
    </div>
  );
};
export default Die;

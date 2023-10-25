import { useState } from "react";
import "../App.css";

const Card = ({ text, active, found, handleClick }) => {
  // For development purposes only:
  const splittedText = text.split("/");
  const filename = splittedText[splittedText.length - 1];

  let activityClass;

  if (active) activityClass = "active";
  else activityClass = "nonActive";

  if (!found) {
    return (
      <div className={`card ${activityClass}`} onClick={handleClick}>
        <p>Play me!</p>
      </div>
    );
  }
  return (
    <div className="card found">
    <p>Good job!!</p>
    </div>
  );
};

export default Card;

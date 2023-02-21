import React, { useState, useEffect } from "react";
import "../../styles/about.css";

// const changeColor = (e) => {
//   var element = document.getElementById("overview");
//   var color = e.currentTarget.getAttribute("active-color-value");
//   element.style.backgroundColor = color;
// };


const Buttons = (props) => {
  const [activeButtonId, setActiveButtonId] = useState("overview");
  const [previousActiveButton, setPrevious] = useState(null);

  useEffect(() => {
    //need to remove active color if a different button is selected
    // grab all button ids to transparent?

    var element = document.getElementById(activeButtonId);
    var color = element.getAttribute("active-color-value");
    element.style.backgroundColor = color;
  });

  return (
    <div className="button-group">
      <button
        id="overview"
        className="single-button"
        active-color-value={props.buttonColor}
        onClick={() => setActiveButtonId("overview")}
      >
        <h3 className="button-number">01</h3>
        <h3 className="button-label">Overview</h3>
      </button>

      <div
        id="structure"
        className="single-button"
        onClick={() => setActiveButtonId("structure")}
        active-color-value={props.buttonColor}
      >
        <h3 className="button-number">02</h3>
        <h3 className="button-label">Internal Structure</h3>
      </div>

      <div
        id="geology"
        className="single-button"
        onClick={() => setActiveButtonId("geology")}
        active-color-value={props.buttonColor}
      >
        <h3 className="button-number">03</h3>
        <h3 className="button-label">Surface Geology</h3>
      </div>
    </div>
  );
};

export default Buttons;

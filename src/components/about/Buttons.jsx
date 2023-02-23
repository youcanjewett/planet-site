// import React, { useState, useEffect } from "react";
import "../../styles/about.css";


const Buttons = (props) => {
  
  return (
    <div className="button-group">
      <button
        id="overview"
        className="single-button"
        active-color-value={props.buttonColor}
        onClick={() => {props.setActiveButtonId("overview")}}
      >
        <h3 className="button-number">01</h3>
        <h3 className="button-label">Overview</h3>
      </button>

      <div
        id="structure"
        className="single-button"
        onClick={() => {props.setActiveButtonId("structure")}}
        active-color-value={props.buttonColor}
      >
        <h3 className="button-number">02</h3>
        <h3 className="button-label">Internal Structure</h3>
      </div>

      <div
        id="geology"
        className="single-button"
        onClick={() => {props.setActiveButtonId("geology")}}
        active-color-value={props.buttonColor}
      >
        <h3 className="button-number">03</h3>
        <h3 className="button-label">Surface Geology</h3>
      </div>
    </div>
  );
};

export default Buttons;

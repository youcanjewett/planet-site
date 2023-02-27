import React, {useEffect, useContext} from "react";
import "../../styles/about.css";
import { activeButtonContext } from "../../navigation/index";

const Buttons = ({planetColor}) => {

  const {activeButtonId, setActiveButtonId} = useContext(activeButtonContext);
 
  useEffect(() => {
    var allButtons = document.getElementsByClassName("single-button");
    for (let button of allButtons) {
      button.style.backgroundColor = "transparent";
    }
    var element = document.getElementById(activeButtonId);
    var color = element.getAttribute("active-color-value");
    element.style.backgroundColor = color;
  });

  return (
    <div className="button-group">
      <button
        id="overview"
        className="single-button"
        active-color-value={planetColor}
        onClick={() => {setActiveButtonId("overview")}}
      >
        <h3 className="button-number">01</h3>
        <h3 className="button-label">Overview</h3>
      </button>

      <div
        id="structure"
        className="single-button"
        onClick={() => {setActiveButtonId("structure")}}
        active-color-value={planetColor}
      >
        <h3 className="button-number">02</h3>
        <h3 className="button-label">Internal Structure</h3>
      </div>

      <div
        id="geology"
        className="single-button"
        onClick={() => {setActiveButtonId("geology")}}
        active-color-value={planetColor}
      >
        <h3 className="button-number">03</h3>
        <h3 className="button-label">Surface Geology</h3>
      </div>
    </div>
  );
};

export default Buttons;

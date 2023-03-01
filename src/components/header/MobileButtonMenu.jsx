import React, { useEffect, useContext } from "react";
import { activeButtonContext } from "../../navigation/index";

import "../../styles/header.css";

const MobileButtonMenu = ({planetColor}) => {
  const { activeButtonId, setActiveButtonId } = useContext(activeButtonContext);

  useEffect(() => {
    var allButtons = document.getElementsByClassName("mobile-button");
    for (let button of allButtons) {
      button.style.borderBottomColor = "transparent";
    }
    var element = document.getElementById(`${activeButtonId}-mobile`);
    var color = element.getAttribute("active-color-value");
    element.style.borderBottomColor = color;
  }, [activeButtonId]);

  return (
    <div className="mobile-button-container">
      <button
        id="overview-mobile"
        className="mobile-button"
        active-color-value={planetColor}
        onClick={() => {
          setActiveButtonId("overview");
        }}
        
      >
        Overview
        
      </button>
      <button
        id="structure-mobile"
        className="mobile-button"
        active-color-value={planetColor}
        onClick={() => {
          setActiveButtonId("structure");
        }}
      >
        Structure
      </button>
      <button
        id="geology-mobile"
        className="mobile-button"
        active-color-value={planetColor}
        onClick={() => {
          setActiveButtonId("geology");
        }}
      >
        Surface
      </button>
    </div>
  );
};

export default MobileButtonMenu;

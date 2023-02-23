import React, { useState, useEffect } from "react";
import Image from "./Image";
import PlanetName from "./PlanetName";
import Content from "./Content";
import Buttons from "./Buttons";
import "../../styles/about.css";

const About = (props) => {
  const [activeButtonId, setActiveButtonId] = useState("overview");

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
    <div className="about-container">
      <div className="image-container">
        <Image
          activeButtonId={activeButtonId}
          name={props.name}
          images={props.images}
        />
        <img
          className={
            activeButtonId === "geology"
              ? "geology-image-dislay"
              : "geology-image-hidden"
          }
          src={`geology-${props.name}.png`}
          alt="surface geology"
        />
      </div>

      <div className="content-container">
        <div>
          <PlanetName name={props.name} />
          <Content
            activeButtonId={activeButtonId}
            planetContent={props.planetContent}
            sourceLink={props.sourceLink}
          />
        </div>
        <Buttons
          activeButtonId={activeButtonId}
          setActiveButtonId={setActiveButtonId}
          buttonColor={props.buttonColor}
        />
      </div>
    </div>
  );
};

export default About;

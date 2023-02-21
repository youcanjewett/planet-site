import React from "react";

import "../../styles/planetData.css";

const PlanetData = (props) => {
  return (
    <div className="planet-facts-container">
      <div className="data-node-container">
        <h3 className="data-title">rotation time</h3>
        <h2 className="data-value">{props.rotation}</h2>
      </div>
      <div className="data-node-container">
        <h3 className="data-title">revolution time</h3>
        <h2 className="data-value">{props.revolution}</h2>
      </div>
      <div className="data-node-container">
        <h3 className="data-title">radius</h3>
        <h2 className="data-value">{props.radius}</h2>
      </div>
      <div className="data-node-container">
        <h3 className="data-title">average temp.</h3>
        <h2 className="data-value">{props.temperature}</h2>
      </div>
    </div>
  );
};

export default PlanetData;

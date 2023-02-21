import React from "react";
import '../../styles/about.css';

const PlanetName = (props) => {
    return (
        <h1 className="planet-name">{props.name}</h1>
    )
}

export default PlanetName;
import React from "react";
import '../../styles/about.css';
import planetImage from '../../assets/planet-mercury.svg';

const Image = () => {
    return (
        <img className="planet-image" src={planetImage} alt="mercury" />
    )
}

export default Image;
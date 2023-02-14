import React from "react";
import Image from './Image'
import PlanetName from "./PlanetName";
import Content from "./Content";
import Buttons from "./Buttons";
import '../../styles/about.css';


const About = () => {
    return (
        <div className="about-container">
            <div className="image-container">
                <Image />
            </div>

            <div className='content-container'>
                <div>
                <PlanetName />
                <Content />
                </div>
                <Buttons />

            </div>
        </div>
    )
}

export default About;
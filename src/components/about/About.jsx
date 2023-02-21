import React from "react";
import Image from './Image'
import PlanetName from "./PlanetName";
import Content from "./Content";
import Buttons from "./Buttons";
import '../../styles/about.css';


const About = (props) => {
    return (
        <div className="about-container">
            <div className="image-container">
                <Image />
            </div>

            <div className='content-container'>
                <div>
                <PlanetName name={props.name}/>
                <Content 
                    planetContent={props.planetContent}
                    sourceLink={props.sourceLink}/>
                </div>
                <Buttons buttonColor={props.buttonColor}/>

            </div>
        </div>
    )
}

export default About;
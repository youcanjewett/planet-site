import React from "react";
import Header from '../components/header/Header';
import About from '../components/about/About';
import MobileButtonMenu from "../components/header/MobileButtonMenu";
import PlanetData from "../components/planetData/PlanetData";
import '../App.css';
// need react router

const Navigation = () => {
    return (
        <>
            <Header />
            <MobileButtonMenu />
            <div className="main-container">  
                <About />
                <PlanetData />
            </div> 
            

        </>
    )
}

export default Navigation;
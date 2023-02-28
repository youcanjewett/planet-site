import React from "react";
import { Link } from "react-router-dom";
import '../../styles/header.css';

const PlanetMenu =() =>  {


    
        return (
            <div className = "menu-container">
                <Link to="/" className = 'menu-planet'>Mercury</Link>
                <Link to="/venus" className = 'menu-planet'>Venus</Link>
                <Link to="/earth" className = 'menu-planet'>Earth</Link>
                <Link to="/mars" className = 'menu-planet'>Mars</Link>
                <Link to="/jupiter"className = 'menu-planet'>Jupiter</Link>
                <Link to="/saturn" className = 'menu-planet'>Saturn</Link>
                <Link to="/uranus" className = 'menu-planet'>Uranus</Link>
                <Link to="/neptune" className = 'menu-planet'>Neptune</Link>

                <div className="menu-icon">
                    <button className="header-toggle">
                        <img src="icon-hamburger.svg" alt="hamburger icon"/>
                    </button>
                </div>
            </div>
        )
    
};

export default PlanetMenu;
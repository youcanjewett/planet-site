import React from "react";
import { Link } from "react-router-dom";
import '../../styles/header.css';

class PlanetMenu extends React.Component {

    render() {
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

                <div className="header-toggle">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        )
    }
}

export default PlanetMenu;
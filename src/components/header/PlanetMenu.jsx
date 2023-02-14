import React from "react";
import '../../styles/header.css';

class PlanetMenu extends React.Component {

    render() {
        return (
            <div className = "menu-container">
                <div className = 'menu-planet'>Mercury</div>
                <div className = 'menu-planet'>Venus</div>
                <div className = 'menu-planet'>Earth</div>
                <div className = 'menu-planet'>Mars</div>
                <div className = 'menu-planet'>Jupiter</div>
                <div className = 'menu-planet'>Saturn</div>
                <div className = 'menu-planet'>Uranus</div>
                <div className = 'menu-planet'>Neptune</div>

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
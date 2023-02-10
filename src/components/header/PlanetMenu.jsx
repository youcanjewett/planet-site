import React from "react";
import '../../styles/header.css';

class PlanetMenu extends React.Component {

    render() {
        return (
            <div className = "menu-container">
                <h3 className = 'menu-planet'>Mercury</h3>
                <h3 className = 'menu-planet'>Venus</h3>
                <h3 className = 'menu-planet'>Earth</h3>
                <h3 className = 'menu-planet'>Mars</h3>
                <h3 className = 'menu-planet'>Jupiter</h3>
                <h3 className = 'menu-planet'>Saturn</h3>
                <h3 className = 'menu-planet'>Neptune</h3>

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
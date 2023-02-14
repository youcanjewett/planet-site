import React from "react";
import DataNode from "./DataNode";

import "../../styles/planetData.css";

const PlanetData = () => {
    return (
        <div className = "planet-facts-container">
            <DataNode />
            <DataNode />
            <DataNode />
            <DataNode />

        </div>
    )
}

export default PlanetData;
import React from "react";
import PlanetTitle from "./PlanetTitle";
import PlanetMenu from "./PlanetMenu";
import "../../styles/header.css";

const Header = () => {
  return (
    <div className="header-container">
      <PlanetTitle></PlanetTitle>
      <PlanetMenu></PlanetMenu>
      
    </div>
  );
};

export default Header;

import React from "react";
import Header from "../../components/header/Header";
import About from "../../components/about/About";
import MobileButtonMenu from "../../components/header/MobileButtonMenu";
import PlanetData from "../../components/planetData/PlanetData";
import data from './uranusData.json';
import '../../App.css';

const Uranus = () => {
      return (
    <>
      <Header />
      <MobileButtonMenu />
      <div className="main-container">
        <About 
          name={data.name} 
          planetContent={data}
          sourceLink={data}
          buttonColor={data.buttonColor}
          images={data.images}/>
          
        <PlanetData 
          rotation={data.rotation}
          revolution={data.revolution}
          radius={data.radius}
          temperature={data.temperature}
        />
      </div>
    </>
  );
    
}

export default Uranus;
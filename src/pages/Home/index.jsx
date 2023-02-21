import React from "react";
import Header from "../../components/header/Header";
import About from "../../components/about/About";
import MobileButtonMenu from "../../components/header/MobileButtonMenu";
import PlanetData from "../../components/planetData/PlanetData";
import data from './mercuryData.json';
import '../../App.css';

const Home = () => {
      return (
    <>
      <Header />
      <MobileButtonMenu />
      <div className="main-container">
        <About 
          name={data.name} 
          planetContent={data.overview.content}
          sourceLink={data.overview.source}
          buttonColor={data.buttonColor}/>
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

export default Home;
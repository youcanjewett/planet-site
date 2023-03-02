import React, {useContext} from "react";
import PlanetData from "../../components/planetData/PlanetData";
import MobileButtonMenu from "../../components/header/MobileButtonMenu";

import { activeButtonContext } from "../../navigation/index";
import "../../App.css";
import "../../styles/about.css";
import PlanetName from "../../components/about/PlanetName";
import Content from "../../components/about/Content";
import Image from "../../components/about/Image";
import Buttons from "../../components/about/Buttons";


const Mars = ({ planet }) => {

  const {activeButtonId} = useContext(activeButtonContext);
  const marsColor = "#D14C32";

  return (
    <>
  <MobileButtonMenu/>
      <div className="main-container">
        <div className="about-container">
          <div className="image-container">
            <Image
              name={planet.name}
              images={planet.images}
            />
            <img
              className={
                activeButtonId === "geology"
                  ? "geology-image-dislay"
                  : "geology-image-hidden"
              }
              src={"geology-mars.png"}
              alt="surface geology"
            />
          </div>
          <div className="content-container">
              <div className="tablet-content">
                <PlanetName name={planet.name}/>
                <Content planet={planet} />

              </div>

            <div className="button-group">
              <Buttons className={"button-group"} planetColor={marsColor}/>
            </div>

          </div>
        </div>
        <PlanetData
          rotation={planet.rotation}
          revolution={planet.revolution}
          radius={planet.radius}
          temperature={planet.temperature}
        />
      </div>
    </>
  );
};

export default Mars;

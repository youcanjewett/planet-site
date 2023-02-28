import React, {useContext} from "react";
import PlanetData from "../../components/planetData/PlanetData";
import { activeButtonContext } from "../../navigation/index";
import "../../App.css";
import "../../styles/about.css";
import PlanetName from "../../components/about/PlanetName";
import Content from "../../components/about/Content";
import Image from "../../components/about/Image";
import Buttons from "../../components/about/Buttons";


const Home = ({ planet }) => {

  const {activeButtonId} = useContext(activeButtonContext);
  const mercuryColor = "#419EBB";

  return (
    <>
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
              src={`geology-${planet.name}.png`}
              alt="surface geology"
            />
          </div>
          <div className="content-container">
              <div className="tablet-content">
                <PlanetName name={planet.name}/>
                <Content planet={planet} />

              </div>

            <div className="button-group">
              <Buttons planetColor={mercuryColor}/>
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

export default Home;

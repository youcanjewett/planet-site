import React, {useContext} from "react";
import { activeButtonContext } from "../../navigation/index";
import "../../styles/about.css";
import srcImage from "../../assets/icon-source.svg"

const Content = ({planet}) => {

  const {activeButtonId} = useContext(activeButtonContext);

  const setContent = (buttonId, planetData) => {
    let content;
    switch (buttonId) {
        case "overview":
          content= planetData.overview.content;
          break;
        case "structure":
          content = planetData.structure.content;
          break;
        case "geology":
          content = planetData.geology.content;
          break;
        default:
            return null;
    }
    return content;
};

const setSourceLink = (buttonId, planetData) => {
  let link;
  switch (buttonId) {
      case "overview":
        link= planetData.overview.source;
        break;
      case "structure":
        link = planetData.structure.source;
        break;
      case "geology":
        link = planetData.geology.source;
        break;
      default:
          return null;
  }
  return link;
};

  return (
    <>
      <div className="planet-content">
      {setContent(activeButtonId, planet)}
      </div>
      <div className="source">
        <div>Source : </div>
        <a href={setSourceLink(activeButtonId, planet)}>Wikipedia</a>
        <img className="source-image" src={srcImage} alt='source link'/>
      </div>
    </>
  );
};

export default Content;

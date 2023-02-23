import React from "react";
import "../../styles/about.css";
import srcImage from "../../assets/icon-source.svg"

const Content = (props) => {

  const setContent = (buttonId, planetContent) => {
    let content;
    switch (buttonId) {
        case "overview":
          content= planetContent.overview.content;
          break;
        case "structure":
          content = planetContent.structure.content;
          break;
        case "geology":
          content = planetContent.geology.content;
          break;
        default:
            return null;
    }
    return content;
};

const setSourceLink = (buttonId, planetContent) => {
  let link;
  switch (buttonId) {
      case "overview":
        link= planetContent.overview.source;
        break;
      case "structure":
        link = planetContent.structure.source;
        break;
      case "geology":
        link = planetContent.geology.source;
        break;
      default:
          return null;
  }
  return link;
};

  return (
    <>
      <div className="planet-content">
      {setContent(`${props.activeButtonId}`, props.planetContent)}
      </div>
      <div className="source">
        <div>Source : </div>
        <a href={setSourceLink(`${props.activeButtonId}`, props.planetContent)}>Wikipedia</a>
        <img className="source-image" src={srcImage} alt='source link'/>
      </div>
    </>
  );
};

export default Content;

import React from "react";
import "../../styles/about.css";
import srcImage from "../../assets/icon-source.svg"

const Content = (props) => {
  return (
    <>
      <div className="planet-content">
        {props.planetContent}
      </div>
      <div className="source">
        <div>Source : </div>
        <a href={props.sourceLink}>Wikipedia</a>
        <img className="source-image" src={srcImage} alt='source link'/>
      </div>
    </>
  );
};

export default Content;

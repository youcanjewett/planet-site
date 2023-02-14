import React from "react";
import "../../styles/about.css";
import srcImage from "../../assets/icon-source.svg"

const Content = () => {
  return (
    <>
      <div className="planet-content">
        Mercury is the smallest planet in the Solar System and the closest to
        the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest
        of all the Sun's planets. Mercury is one of four terrestrial planets in
        the Solar System, and is a rocky body like Earth.
      </div>
      <div className="source">
        <div>Source : </div>
        <a href="https://en.wikipedia.org/wiki/Mercury_(planet)">Wikipedia</a>
        <img className="source-image" src={srcImage} alt='source link'/>
      </div>
    </>
  );
};

export default Content;


import React from "react";
import "../../styles/about.css";

const Image = (props) => {
  
    const setImage = (buttonId, images) => {
        let source;
        switch (buttonId) {
            case "overview":
              source= images.planet;
              break;
            case "structure":
              source = images.internal;
              break;
            case "geology":
              source = images.planet;
              break;
            default:
                return null;
        }
        return source;
    };

  return (
      <img
        className="planet-image"
        src={setImage(`${props.activeButtonId}`, props.images)}
        alt={props.name}
      />
      
    
  );
};

export default Image;

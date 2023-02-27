
import React, {useContext} from "react";
import { activeButtonContext } from "../../navigation/index";
import "../../styles/about.css";

const Image = ({name, images}) => {

  const {activeButtonId} = useContext(activeButtonContext);
  
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
        src={setImage(activeButtonId, images)}
        alt={name}
      />
      
    
  );
};

export default Image;

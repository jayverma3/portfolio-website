import React from "react";
import "./imageandname.css";
import picRound from "../../assets/picround.png"; // Adjust the path as necessary
import whiteline from "../../assets/whiteblock.png"; // Adjust the path as necessary

const ImageAndName = () => {
  return (
    <div className="image-and-name-container slide-up-animation">
      <img src={picRound} alt="Round" className="round-image" />
      <img src={whiteline} alt="whiteline" className="white-line" />
      <h2 className="iandnclass">
        {" "}
        &lt;Welcome/&gt;<br></br>
      </h2>
    </div>
  );
};

export default ImageAndName;

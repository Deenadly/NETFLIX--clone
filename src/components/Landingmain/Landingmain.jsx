import React from "react";
import "./Landingmain.css";
const Landingmain = ({ heading, content, img, pattern, video, special }) => {
  return (
    <div className={`landingmainparent ${pattern}`}>
      <div className="main-heading-wrapper">
        <p className="main-heading headingdiv" id="contentheader">
          {heading}
        </p>
        <p className="main-heading-content">{content}</p>
      </div>
      <div className="assetplace">
        <div className="main-diplay-container ">
          <img src={img} alt="" id={special} />
        </div>
      </div>
    </div>
  );
};

export default Landingmain;

import React from "react";
import "./Notfound.css";
import notfoundImage from "../../source/notfoundImage.jpeg";
import netflix from "../../source/netflix.png";
import Signbutton from "../../Components/button/Signbutton";

const NotfoundPage = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${notfoundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      <div className="notfound-container">
        <div className="notfound-navbar">
          <img className="netflixlogo" src={netflix} alt="" />
        </div>
        <div className="notfound-main-container">
          <span className="lostway-title">Lost your way?</span>
          <span className="lostway-main">
            Sorry,We can't find that page.You'll find lots to explore on the
            home page.
          </span>
          <Signbutton className="homebtn" content="Netflix Home" />

          <div className="error-items">
            <div className="line"></div>
            <span className="error-text"> Error Code</span>
            <span className="codeerror">NSES-404</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotfoundPage;

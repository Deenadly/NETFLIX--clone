import React from "react";
import netflixlogo from "../../source/netflix.png";
import navavatar from "../../source/Netflix-avatar.png";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="nav">
      <img src={netflixlogo} alt="netflix-logo" className="netflix-logo"/>
      <img src={navavatar} alt="netflix-logo" className="navavatar"/>

      
    </div>

  );
};

export default Navbar;

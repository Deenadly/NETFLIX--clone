import React from "react";
import "./Navlanguage.css";
import { AiOutlineGlobal } from "react-icons/ai";

const Navlanguage = () => {
  return (
    <>
      <div className="navbar-language-list" >
        <AiOutlineGlobal className="navbar-language-globle" size={"18px"} stroke={""}/>
        <select defaultValue="English" className="nav-options">
          <option value="English">English</option>
          <option value="हिंदी">हिंदी</option>
        </select>
      </div>
    </>
  );
};

export default Navlanguage;

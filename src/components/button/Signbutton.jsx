import React from "react";
import "./Signbutton.css";
const Signbutton = (prop) => {
  return (
    <>
      <button className={prop.className}>{prop.content}</button>
    </>
  );
};

export default Signbutton;

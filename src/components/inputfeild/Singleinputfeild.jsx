import React from "react";
import "./Singleinputfeild.css";

const Singleinputfeild = ({ type, label, className }) => {
  return (
    <>
      <div className="input-contaioner">
        <input
          type={type}
          name={label}
          id={label}
          className={className}
          required
        />
        <label className="singleinputlabel"  htmlFor={label}>
          {label}
        </label>
      </div>
    </>
  );
};

export default Singleinputfeild;

import React, { useState } from "react";
import "./Faq.css";
import { AiOutlinePlus } from "react-icons/ai";
import { VscChromeClose } from "react-icons/vsc";

export const Faq = ({ question, answer }) => {
  const [show, setshow] = useState(false);

  return (
    <>
      <div className="frequent-topcontainer">
        <div className="frequent-container" onClick={() => setshow(!show)}>
          <p>{question}</p>{" "}
          <p className="plussign">
            {show ? <VscChromeClose /> : <AiOutlinePlus />}
          </p>
        </div>
        {show && (
          <div className="frequent-item">
            <p>{answer}</p>
          </div>
        )}
      </div>
    </>
  );
};

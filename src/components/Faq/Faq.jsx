import "./Faq.css";
import { AiOutlinePlus } from "react-icons/ai";
import { VscChromeClose } from "react-icons/vsc";

export const Faq = ({ question, answer, isOpen, onClick }) => {
  return (
    <>
      <div className="frequent-topcontainer">
        <div className="frequent-container" onClick={onClick}>
          <p>{question}</p>
          <p className="plussign">
            {isOpen ? <VscChromeClose /> : <AiOutlinePlus />}
          </p>
        </div>
        {isOpen && (
          <div className="frequent-item">
            <p>{answer}</p>
          </div>
        )}
      </div>
    </>
  );
};

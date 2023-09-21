import "./LandingNavbar.css";
import netflix from "../../source/netflix.png";
import Navlanguage from "./Navlanguage";
import Signbutton from "../../button/Signbutton";

const LandingNavbar = ({ img }) => {
  return (
    <>
      <div className="navbartitle">
        <div className="navlogo">
          <img className="netflixlogofill" src={netflix} alt="" />
        </div>
        <div className="navbtn">
          <Navlanguage />
          <Signbutton className="smallbtn" content="Sign In" />
        </div>
      </div>
    </>
  );
};

export default LandingNavbar;

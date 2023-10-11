import "./signup.css";
import netflix from "../../source/netflix.png";
import Singleinputfeild from "../../Components/inputfeild/Singleinputfeild";
import Signbutton from "../../Components/button/Signbutton";
import Footer from "../../Components/Footer/Footer";
import Navlanguage from "../../Components/navbar/landingnavbar/Navlanguage";

const Signup = () => {
  return (
    <>
      <div className="signup-container">
        <div className="signuppage-container">
          <div className="fade">
            <img className="netflixlogo" src={netflix} alt="" />
            <div className="signup-main-container">
              <div className="signup-item">
                <div className="signup-input">
                  <h1 className="signtitle">Register</h1>
                  <div className="signup-box">
                    <Singleinputfeild
                      type={"Text"}
                      label={"Email address"}
                      className={"signinemail"}
                    />
                    <Singleinputfeild
                      type={"password"}
                      label={"password"}
                      className={"signinemail"}
                    />
                  </div>
                  <div className="signup-btn">
                    <Signbutton content="Sign up" className="signinbtn" />
                  </div>
                  <div className="signup-main-end">
                    <div className="signup-container">
                      <span className="new-to-netflix">
                        Already subscribed to Netflix?
                      </span>
                      <span className="signup-items">Sign up now.</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="footer">
                <div className="footer-box">
                  <div className="question-call">
                    Questions? Call
                    <span className="call-number">000-800-919-1694</span>
                  </div>
                  <div className="footer-items-container">
                    <Footer content="FAQ" />
                    <Footer content="Help Centre" />
                    <Footer content="Terms of Use" />
                    <Footer content="Privacy" />
                    <Footer content="Cookie Preferences" />
                    <Footer content="Corporate Information" />
                  </div>
                  <div className="footer-language">
                    <Navlanguage />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;

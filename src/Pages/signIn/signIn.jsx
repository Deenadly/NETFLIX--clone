import React, { useState } from "react";
import "./signIn.css";
import netflix from "../../source/netflix.png";
import Singleinputfeild from "../../Components/inputfeild/Singleinputfeild";
import Signbutton from "../../Components/button/Signbutton";
import Footer from "../../Components/Footer/Footer";
import Navlanguage from "../../Components/navbar/landingnavbar/Navlanguage";

const SignIn = () => {
  const [showDescription, setShowDescription] = useState(false);

  return (
    <>
      <div className="signin-container">
        <div className="signinpage-container">
          <div className="fade">
            <img className="netflixlogo" src={netflix} alt="" />
            <div className="signin-main-container">
              <div className="signin-item">
                <div className="signin-input">
                  <h1 className="signtitle">Sign In</h1>
                  <div className="signin-box">
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
                  <div className="sigin-btn">
                    <Signbutton content="Sign In" className="signinbtn" />
                  </div>
                  <div className="sigin-helpbar">
                    <div className="remember-item">
                      <input
                        type="checkbox"
                        defaultChecked
                        className="checkbox"
                      />
                      <span className="remember-text">Remember me</span>
                    </div>
                    <div className="helper-item">Need help?</div>
                  </div>
                  <div className="signin-main-end">
                    <div className="signup-container">
                      <span className="new-to-netflix">New to Netflix?</span>
                      <span className="signup-items">Sign up now.</span>
                    </div>
                  </div>
                  <div className="signup-description">
                    <>
                      <p className="signup-protect">
                        This page is protected by Google reCAPTCHA to ensure
                        you're not a bot.
                        {showDescription ? null : (
                          <span
                            className="learnmore"
                            onClick={() => setShowDescription(true)}
                          >
                            Learn more.
                          </span>
                        )}
                      </p>
                      <br />
                      {showDescription && (
                        <p className="signup-protect-define">
                          The information collected by Google reCAPTCHA is
                          subject to the Google
                          <span className="privacy"> Privacy Policy</span> and
                          <span className="terms">Terms of Service</span>, and
                          is used for providing, maintaining, and improving the
                          reCAPTCHA service and for general security purposes
                          (it is not used for personalised advertising by
                          Google).
                        </p>
                      )}
                    </>
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

export default SignIn;

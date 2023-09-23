import React, { useState } from "react";
import logo from "../../source/logo1.jpg";
import LandingNavbar from "../../Components/navbar/landingNavbar";
import Singleinputfeild from "../../Components/inputfeild/Singleinputfeild";
import Signbutton from "../../Components/button/Signbutton";
import Landingmain from "../../Components/Landingmain/Landingmain";
import tvimg from "../../source/tvimg1.jpeg";
import img2 from "../../source/img2.jpeg";
import img3 from "../../source/img3.jpeg";
import img4 from "../../source/img4.png";
import { Faq } from "../../Components/Faq/Faq";
import Footer from "../../Components/Footer/Footer";
import Navlanguage from "../../Components/navbar/Navlanguage";
import "./LandingPage.css";

const LandingPage = () => {
  const [openQuestionIndex, setOpenQuestionIndex] = useState(null);

  const handleQuestionClick = (index) => {
    if (openQuestionIndex === index) {
      setOpenQuestionIndex(null);
    } else {
      setOpenQuestionIndex(index);
    }
  };

  const faqData = [
    {
      question: "What is Netflix?",
      answer: (
        <>
          <div>
            <p>
              Netflix is a streaming service that offers a wide variety of
              award-winning TV shows, movies, anime, documentaries and more – on
              thousands of internet-connected devices.
            </p>
            <br />
            <p>
              You can watch as much as you want, whenever you want, without a
              single ad – all for one low monthly price. There's always
              something new to discover, and new TV shows and movies are added
              every week!
            </p>
          </div>
        </>
      ),
    },
    {
      question: "How much does Netflix cost?",
      answer: (
        <p>
          Watch Netflix on your smartphone, tablet, Smart TV, laptop, or
          streaming device, all for one fixed monthly fee. Plans range from ₹
          649 to ₹ 149 a month. No extra costs, no contracts.
        </p>
      ),
    },
    {
      question: "Where can I watch?",
      answer: (
        <>
          <div>
            <p>
              Watch anywhere, anytime. Sign in with your Netflix account to
              watch instantly on the web at netflix.com from your personal
              computer or on any internet-connected device that offers the
              Netflix app, including smart TVs, smartphones, tablets, streaming
              media players, and game consoles.
            </p>
            <br />
            <p>
              You can also download your favourite shows with the iOS, Android,
              or Windows 10 app. Use downloads to watch while you're on the go
              and without an internet connection. Take Netflix with you
              anywhere.
            </p>
          </div>
        </>
      ),
    },
    {
      question: "How do I cancel?",
      answer: (
        <p>
          Netflix is flexible. There are no annoying contracts and no
          commitments. You can easily cancel your account online in two clicks.
          There are no cancellation fees – start or stop your account anytime.
        </p>
      ),
    },
    {
      question: "What can I watch on Netflix?",
      answer: (
        <p>
          Netflix has an extensive library of feature films, documentaries, TV
          shows, anime, award-winning Netflix originals, and more. Watch as much
          as you want, anytime you want.
        </p>
      ),
    },
    {
      question: "Is Netflix good for kids?",
      answer: (
        <>
          <div>
            <p>
              The Netflix Kids experience is included in your membership to give
              parents control while kids enjoy family-friendly TV shows and
              films in their own space.
            </p>
            <br />
            <p>
              Kids profiles come with PIN-protected parental controls that let
              you restrict the maturity rating of content kids can watch and
              block specific titles you don’t want kids to see.
            </p>
          </div>
        </>
      ),
    },
  ];

  return (
    <div className="fade-img">
      <div
        className="landingpage-container"
        style={{
          background: `url(${logo})`,
          backgroundSize: "cover",
          backgroundPosition: "center center ",
          height: "92vh",
        }}
      >
        <div className="fade">
          <div className="landingnavbar">
            <LandingNavbar />
          </div>
          <div className="landingboby-container">
            <h1>
              The biggest Indian hits. The best Indian stories. All streaming
              here.
            </h1>
            <h5>Watch anywhere. Cancel anytime.</h5>
            <h6>
              Ready to Watch? Enter your email to create or restart your
              membership.
            </h6>
            <div className="landing-btn">
              <Singleinputfeild
                type={"text"}
                label={"Email address"}
                className={"singleinputfeild"}
              />
              <Signbutton className="largebtn" content="Get Started >" />
            </div>
          </div>
        </div>
      </div>
      <div className="Landing-main-container">
        <Landingmain
          heading="Enjoy on your Tv"
          content="Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more."
          img={tvimg}
        />
        <Landingmain
          heading="Download your shows to watch offline"
          content="Save your favourites easily and always have something to watch."
          img={img3}
          pattern="left"
        />
        <Landingmain
          heading="Watch everywhere"
          content="Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV."
          img={img4}
          special="special"
        />
        <Landingmain
          heading="Create profiles for kids"
          content="Send children on adventures with their favourite characters in a space made just for them—free with your membership."
          img={img2}
          pattern="left"
        />
      </div>
      <div className="landing-main-containerdown">
        <p className="frequenttitle">Frequently Asked Questions</p>
        <div className="frequent-items">
          {faqData.map((item, index) => (
            <Faq
              key={index}
              question={item.question}
              answer={item.answer}
              isOpen={openQuestionIndex === index}
              onClick={() => handleQuestionClick(index)}
            />
          ))}
          <div className="frequent-footer">
            Ready to watch? Enter your email to create or restart your
            membership.
          </div>
          <div className="footerbtn">
            <div className="landing-btn">
              <Singleinputfeild
                type={"text"}
                label={"Email address"}
                className={"singleinputfeild"}
              />
              <Signbutton className="largebtn" content="Get Started >" />
            </div>
          </div>
        </div>
      </div>
      <div className="footer-container">
        <div className="footer-box">
          <div className="question-call">
            Questions? Call
            <span className="call-number">000-800-919-1694</span>
          </div>
          <div className="footer-items-container">
            <Footer content="FAQ" />
            <Footer content="Help Centre" />
            <Footer content="Account" />
            <Footer content="Media Centre " />
            <Footer content="Investor Relations" />
            <Footer content="Jobs" />
            <Footer content="Ways to Watch" />
            <Footer content="Terms of Use" />
            <Footer content="Privacy" />
            <Footer content="Cookie Preferences" />
            <Footer content="Corporate Information" />
            <Footer content="Contact Us" />
            <Footer content="Speed Test" />
            <Footer content="Legal Notices" />
            <Footer content="Only on Netflix" />
          </div>
          <div className="footer-language">
            <Navlanguage />
          </div>
          <div className="footer-end">Netflix India</div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;

import React from "react";
import AboutSambhajiPhoto from "../images/about-sambhaji-photo1.jpg";
import SambhajiShindeCV from "../pdf-files/Sambhaji-shinde-CV.pdf";
import "../styles/About.css";

function About() {
  return (
    <>
      <h2>About Me </h2>
      <p className="introduction"> Introduction </p>

      <div className="about-section">
        <div className="about-left-section">
          <img
            src={AboutSambhajiPhoto}
            alt="Myphoto"
            className="about-sambhaji-photo"
          />
        </div>

        <div className="about-right-section">
          <p className="about-paragraph">
            <strong>Hello,</strong> I am Sambhaji Shinde from Pune. <br /><br />
            I am currently pursuing Master of Computer Apllication (MCA) from
            Institute of Management and Career Courses, Pune (IMCC) with 80.44 % till last semester (3rd semester). I have done my graduation in B.Sc. (Computer Science) from
            pune with 70.73 % score.
            <br />
            <br />
            I have completed my Higher Secondary School (HSC) from Hingoli district (MH) with score 74.77 %. 
            And Secondary School education (SSC) from Hingoli with score 85.60 % (2nd rank holder). 
            <br />
            <br />
            I have honed my skills in web development which includes
            technologies like HTML, CSS, JavaScript & WordPress and now i am learning
            React.js. I like to build interactive,
            easy-to-navigate & User-freindly UI's. <br />
            <br />
           <strong> Now I am seeking for a internship or job
            opportunity. </strong>
          </p>
          <a href={SambhajiShindeCV} download="Sambhaji-shinde-CV">
            <button className="download-button"> Download CV</button>
          </a>
        </div>
      </div>
    </>
  );
}

export default About;

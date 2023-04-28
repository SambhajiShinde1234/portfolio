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
            <strong>Hello,</strong> I am Sambhaji Shinde from Pune. <br />
            I am currently pursuing Master of Computer Apllication (MCA) from
            Institute of Management and Career Courses, Pune (IMCC).
            <br />
            <br />
            I have honed my skills in web development which includes
            technologies like HTML, CSS, JavaScript & WordPress and I have basic
            knowledge of Node.js and React.js. I like to build interactive,
            easy-to-navigate & User-freindly UI's. <br />
            <br />
            Now I am looking for a Front-end development internship or job
            opportunity. I am very interested in the latest technologies like
            React and Node.js.
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

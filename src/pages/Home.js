import React from "react";
import { NavLink } from "react-router-dom";

import "../styles/Home.css";

import sambhajiPhoto from "../images/sambhaji.jpg";
import WhatsAppChat from "../images/WhatsAppButtonGreenSmall.png";

function Home() {
  return (
    <>
      <div className="home-section">
        <div className="left-section">
        
          <h1 className="h1-heading heading-center">Hy! 👋 I Am <br /> Sambhaji Shinde </h1>
          <p className="sub-heading heading-center"> Front-end Developer 💻</p>
          <p className="paragraph">
            <strong>Hello folks,</strong> i am learning React to become
            front-end developer
            <br />
            I have passion of learning new technologies <br />
            I am currently last year student of MCA.
            <br />
            Looking for internship or full-time job as developer.
          </p>
          <NavLink
            aria-label="Chat on WhatsApp"
            to="https://wa.me/919699828358"
          >
            <img
              alt="Chat on WhatsApp"
              src={WhatsAppChat}
              style={{ width: "12rem" }}
              className="whatsapp"
            />
          </NavLink>
        </div>

        <div className="right-section">
          <img src={sambhajiPhoto} alt="Myphoto" className="sambhaji-photo" />
        </div>
      </div>
    </>
  );
}

export default Home;

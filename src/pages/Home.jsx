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
            <strong>Hello folks,</strong> 
            This is sambhaji shinde, currently pursuing my Master's in Computer Application (MCA).<br /><br />
            I am passionate about learning new skills. Now i am exploring new technologies to become frontend developer.<br /><br />
            <strong>Now i am actively seeking for a chance as intern or full-time job position to utilize my skills to solve real world problems.</strong>
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

import React from "react";
import { NavLink } from "react-router-dom";

import { SlSocialLinkedin } from "react-icons/sl";
import { SlSocialGithub } from "react-icons/sl";
import { SlSocialInstagram } from "react-icons/sl";
import { ImWhatsapp } from "react-icons/im";

import "../styles/SocialMedia.css";

function SocialMedia() {
  return (
    <>
      <div className="social-media-container">
        <NavLink
          to="https://www.linkedin.com/in/sambhajishinde99/"
          className="social-media-links"
        >
          {" "}
          <SlSocialLinkedin />{" "}
        </NavLink>
        <NavLink
          to="https://github.com/SambhajiShinde1234"
          className="social-media-links"
        >
          {" "}
          <SlSocialGithub />{" "}
        </NavLink>
        <NavLink
          to="https://www.instagram.com/_sambhaji.shinde/"
          className="social-media-links"
        >
          {" "}
          <SlSocialInstagram />{" "}
        </NavLink>
        <NavLink to="https://wa.me/919699828358" className="social-media-links">
          {" "}
          <ImWhatsapp />{" "}
        </NavLink>
      </div>
    </>
  );
}

export default SocialMedia;

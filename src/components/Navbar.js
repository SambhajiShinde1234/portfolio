import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Navbar.css";

import { AiOutlineHome } from "react-icons/ai";
import { MdOutlineContactPhone } from "react-icons/md";
import { MdOutlineSchool } from "react-icons/md";
import { BsPerson } from "react-icons/bs";
import { RiCodeSSlashFill } from "react-icons/ri";
import { GoFileCode } from "react-icons/go";

function Navbar() {
  return (
    <>
      <div className="header">
        <div className="logo">
          <NavLink to={"/Home"} className="link" id="logo">
            Sambhaji Shinde
          </NavLink>
        </div>

        <div className="links">
          <ul>
            <li>
              <NavLink to={"/Home"} className="link">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to={"/about"} className="link">
                About
              </NavLink>
            </li>
            <li>
              <NavLink to={"/qualification"} className="link">
                Education
              </NavLink>
            </li>
            <li>
              <NavLink to={"/project"} className="link">
                {" "}
                Project{" "}
              </NavLink>
            </li>
            <li>
              <NavLink to={"/skills"} className="link">
                Skills
              </NavLink>
            </li>
            <li>
              <NavLink to={"/contacts"} className="link">
                Contact
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="m-links">
          <ul>
            <li>
              <NavLink to={"/Home"} className="link">
                <AiOutlineHome />
              </NavLink>
            </li>
            <li>
              <NavLink to={"/about"} className="link">
                <BsPerson />
              </NavLink>
            </li>
            <li>
              <NavLink to={"/qualification"} className="link">
                <MdOutlineSchool />
              </NavLink>
            </li>
            <li>
              <NavLink to={"/project"} className="link">
                <GoFileCode />
              </NavLink>
            </li>
            <li>
              <NavLink to={"/skills"} className="link">
                <RiCodeSSlashFill />
              </NavLink>
            </li>
            <li>
              <NavLink to={"/contacts"} className="link">
                <MdOutlineContactPhone />
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;

import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <>
      <div className="header">

        <div className="logo">
          <NavLink to={"/Home"} className="link">Sambhaji Shinde</NavLink>
        </div>

        <div className="links">
          <ul>
            <li>
              <NavLink to={"/"} className="link"> Home </NavLink>
            </li>
            <li>
              <NavLink to={"/about"} className="link"> About </NavLink>
            </li>
            <li>
              <NavLink to={"/qualifiaction"} className="link"> Qualification </NavLink>
            </li>
            <li>
              <NavLink to={"/project"} className="link"> Project </NavLink>
            </li>
            <li>
              <NavLink to={"/skills"} className="link"> Skills </NavLink>
            </li>
            <li>
              <NavLink to={"/contacts"} className="link"> Contact </NavLink>
            </li>
          </ul>
        </div>

      </div>
    </>
  );
}

export default Navbar;

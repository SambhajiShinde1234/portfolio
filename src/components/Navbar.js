import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <>
      <div className="navbar">
        <ul>
            <li><NavLink to={'/'}> Home </NavLink></li>
            <li><NavLink to={'/about'}> About </NavLink></li>
            <li><NavLink to={'/contacts'}> Contact </NavLink></li>
        </ul>
        </div>
    </>
  );
}

export default Navbar;

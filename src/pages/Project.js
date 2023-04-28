import React from "react";
import { NavLink } from "react-router-dom";

import ProjectData from "../components/ProjectData";
import "../styles/Project.css";

function Project() {
  const ProjectCardItems = ProjectData.map((ProjectCardItems) => (
    <>
      <div className="card-container">
        <div className="project-left-section">
          <img
            src={ProjectCardItems.imageUrl}
            alt={ProjectCardItems.alternateText}
            className="project-image"
          />
        </div>
        <div className="project-right-section">
          <strong>
            <p className="title"> {ProjectCardItems.title}</p>
          </strong>

          <p className="used-technology">
            <strong> Used technologies - </strong>
            <span>{ProjectCardItems.technology}</span>
          </p>

          <div className="btn-div">
            <NavLink
              to={ProjectCardItems.siteUrl}
              target="blank"
              className="btn-demo"
            >
              Live demo
            </NavLink>

            <NavLink
              to={ProjectCardItems.codeUrl}
              target="blank"
              className="btn-code"
            >
              Source code
            </NavLink>
          </div>
        </div>
      </div>
    </>
  ));

  return (
    <>
      <h2> Project </h2>
      <p className="project-sub-heading"> Here are my projects </p>
      <div>{ProjectCardItems}</div>
    </>
  );
}

export default Project;

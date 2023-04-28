import React from "react";
import { AiFillStar } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";
import { BiCodeAlt } from "react-icons/bi";
import { DiCss3 } from "react-icons/di";
import { DiJavascript1 } from "react-icons/di";
import { DiHtml5 } from "react-icons/di";
import { DiReact } from "react-icons/di";
import { DiWordpress } from "react-icons/di";
import { DiMysql } from "react-icons/di";
import { DiPhp } from "react-icons/di";
import { DiVisualstudio } from "react-icons/di";
import { DiNpm } from "react-icons/di";
import { DiResponsive } from "react-icons/di";
import { FaGithub } from "react-icons/fa";

import "../styles/Skills.css";

function Skills() {
  return (
    <>
      <h2> Skills </h2>
      <p className="skills-sub-heading"> My skills level </p>

      <div className="skills-outer-card-container">
        <div className="frontend-card">
          <div className="skills-box">
            <p className="front-end-skills">
              <span>
                <BiCodeAlt size={25} />
              </span>
              Front-end skills
            </p>
          </div>

          <div className="skills-box">
            <p className="skills-name">
              <span>
                <DiHtml5 />
              </span>{" "}
              HTML
            </p>
            <span>
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
              <AiOutlineStar />
            </span>
          </div>

          <div className="skills-box">
            <p className="skills-name">
              <span>
                {" "}
                <DiCss3 />
              </span>
              CSS
            </p>
            <span>
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
              <AiOutlineStar />
            </span>
          </div>

          <div className="skills-box">
            <p className="skills-name">
              <span>
                <DiJavascript1 />
              </span>{" "}
              JavaScript
            </p>
            <span>
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
              <AiOutlineStar />
            </span>
          </div>

          <div className="skills-box">
            <p className="skills-name">
              <span>
                <DiReact />
              </span>{" "}
              ReactJs
            </p>
            <span>
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
              <AiOutlineStar />
              <AiOutlineStar />
            </span>
          </div>

          <div className="skills-box">
            <p className="skills-name">
              <span>
                <DiWordpress />
              </span>{" "}
              WordPress
            </p>
            <span>
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
              <AiOutlineStar />
              <AiOutlineStar />
            </span>
          </div>

          <div className="skills-box">
            <p className="skills-name">
              <span>
                <DiResponsive />
              </span>{" "}
              MediaQuery
            </p>
            <span>
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
              <AiOutlineStar />
            </span>
          </div>
        </div>

        <div className="frontend-card">
          <div className="skills-box">
            <p className="front-end-skills">
              <span>
                {" "}
                <BiCodeAlt size={25} />
              </span>
              Back-end skills
            </p>
          </div>

          <div className="skills-box">
            <p className="skills-name">
              <span>
                <DiMysql />
              </span>{" "}
              MySQL
            </p>
            <span>
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
              <AiOutlineStar />
            </span>
          </div>

          <div className="skills-box">
            <p className="skills-name">
              <span>
                <DiPhp />
              </span>{" "}
              PHP
            </p>
            <span>
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
              <AiOutlineStar />
              <AiOutlineStar />
            </span>
          </div>

          <div className="skills-box">
            <p className="skills-name">
              <span>
                <DiVisualstudio />
              </span>{" "}
              VsCode
            </p>
            <span>
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
              <AiOutlineStar />
            </span>
          </div>

          <div className="skills-box">
            <p className="skills-name">
              <span>
                <DiNpm />
              </span>{" "}
              Npm
            </p>
            <span>
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
              <AiOutlineStar />
              <AiOutlineStar />
            </span>
          </div>

          <div className="skills-box">
            <p className="skills-name">
              <span>
                <FaGithub />
              </span>{" "}
              Git
            </p>
            <span>
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
              <AiOutlineStar />
              <AiOutlineStar />
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;

import React from 'react';
import sambhajiPhoto from "../images/sambhaji.jpg";
import "../styles/About.css";

function About() {
  return (
    <>
      <h2>About Me </h2>
      <p> Introduction </p>
      <div className='about-section'>

        <div className='left-section'>
          <img src={sambhajiPhoto} alt='Myphoto' className="sambhaji-photo" />
        </div>

        <div className='right-section'>
          <p>
          Hello, I am Rijvan Juneja from Bhavnagar. 
          I am currently pursuing B.E. in Information Technology at Gyanmanjari Institute of Technology College. <br />
          My professional skills include web development in HTML, CSS, and JavaScript, and I have basic knowledge <br />
          of Node.js and React.js. In addition, I joined PW Full Stack Development Course where I learned about the <br />
          latest technologies. I like to build reliable, easy-to-understand, and fast software. Now I am looking for<br />
          a full-stack development internship or job opportunity. I am very interested in the latest technologies <br />
          like React and Node.js.
          </p>
          <button> Download Resume </button>

        </div>

      </div>
    </>
  )
}

export default About;
import React from "react";
import { useNavigate } from "react-router-dom"
import "../styles/Home.css";
import sambhajiPhoto from "../images/sambhaji.jpg";

function Home() {

  const navigate = useNavigate();

  const goToContact = () => {
    navigate('/contacts');
  }

  return (
    <>
      <div className="home-section">

        <div className="left-section">
          <h1> Sambhaji Shinde </h1>
          <h2> Front-end Developer 💻</h2>
          <p>
            Hello folks, i am learning React to become front-end developer<br />
            I have passion of learning new technologies <br />
            I am currently last year student of MCA.<br />
            Looking for internship or full-time job as developer.
          </p>
          <button onClick={goToContact}>Say Hello 👋</button>
        </div>

        <div className="right-section">
          <img src={sambhajiPhoto} alt='Myphoto' className="sambhaji-photo" />
        </div>

      </div>
    </>
  );
}

export default Home;

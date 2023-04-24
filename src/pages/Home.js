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
          <p className="sub-heading"> Front-end Developer 💻</p>
          <p className="paragraph">
            <strong>Hello folks,</strong> i am learning React to become front-end developer<br />
            I have passion of learning new technologies <br />
            I am currently last year student of MCA.<br />
            Looking for internship or full-time job as developer.
          </p>
          <button onClick={goToContact}>Send Hi...👋</button>
        </div>

        <div className="right-section">
          <img src={sambhajiPhoto} alt='Myphoto' 
          style={{ width: '100%', height: '100%',
          borderRadius:'5rem',transform: 'scaleX(-1)'}}/>
        </div>

      </div>
    </>
  );
}

export default Home;

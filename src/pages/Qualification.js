import React, { useState }from 'react';
import '../styles/Qualification.css';
import Education from '../components/Education';
import EducationData from '../components/EducationData';
import ExperienceData from '../components/ExperienceData';

function Qualification() {

  const [IsEducationActiveButton, setEducationIsActiveButton] = useState('');
  const [IsExperienceActiveButton, setExperienceIsActiveButton] = useState('');

  const [ShowEducation, setShowEducation] = useState();
  const [ShowExperience, setShowExperience] = useState();


  const ShowEducationDetails = () => {

    setEducationIsActiveButton('true');
    setShowEducation(<Education eduexp={EducationData} />);
  }

  
  const ShowExperienceDetails = () => {

    setExperienceIsActiveButton('true');
    setShowExperience(<Education eduexp={ExperienceData} />);
  }

  return (
    <>
      <h2> Qualification </h2>
      <p className='education-sub-heading'> Education & experience history </p>

      <div className='button-section'>
        <button onClick ={ ShowEducationDetails } > Education </button>
        <button onClick ={ ShowExperienceDetails } > Experience </button>
      </div>

      { IsEducationActiveButton ? <div> {ShowEducation} </div> : setExperienceIsActiveButton('false') }
      { IsExperienceActiveButton ? <div> {ShowExperience} </div> : setEducationIsActiveButton('false') }
      {/* <div> {ShowExperience} </div> } */}


    </>
    )
}

export default Qualification;
// import React, { useState }from 'react';
import '../styles/Qualification.css';
// import Education from '../components/Education';
import EducationData from '../components/EducationData';
import ExperienceData from '../components/ExperienceData';

import { GoCalendar } from 'react-icons/go'
import { CiLocationOn } from 'react-icons/ci'
import { MdOutlineSchool } from 'react-icons/md'
 
function Qualification() {
  return (
    <>
      <h2> Qualification </h2>
      <p className='education-sub-heading'> Personal Education & Experience </p>

      <div className='qualification-container'>
          <div className='education-section'>
            <h3 className='education'> Education </h3>
            <div className='education-block'>
              <strong><p className='bottom-gap'><span> <MdOutlineSchool /></span> { EducationData[0].degree }</p></strong>
              <div  className='bottom-gap'> { EducationData[0].institute} </div>
              <p className='bottom-gap'><span> < CiLocationOn /></span> { EducationData[0].place} </p>
              <p><span> < GoCalendar /></span> { EducationData[0].year} </p>
            </div>
          <div>
          <span className='dot'> </span>
          <span className='line'></span>
          </div>
          <span></span>

          <span></span>
          <div>
          <span className='dot'> </span>
          <span className='line'></span>
          </div>
          <div className='education-block bcs-block'>
            <strong><p className='bottom-gap'><span> <MdOutlineSchool /></span> { EducationData[1].degree }</p></strong>
            <p className='bottom-gap'> { EducationData[1].institute} </p>
            <p className='bottom-gap'><span> < CiLocationOn /></span> { EducationData[1].place} </p>
            <p> <span> < GoCalendar /></span> { EducationData[1].year} </p>
          </div>
        
          

          <div className='education-block'>
           <strong><p className='bottom-gap'><span> <MdOutlineSchool /></span> { EducationData[2].degree }</p></strong>
            <p className='bottom-gap'> { EducationData[2].institute} </p>
            <p className='bottom-gap'><span> < CiLocationOn /></span> { EducationData[2].place} </p>
            <p> <span> < GoCalendar /> </span> { EducationData[2].year} </p>
          </div>
          <div >
          <span className='dot'> </span>
          <span className='line'></span>
          </div>
          <span></span>

          <span></span>
          <div>
          <span className='dot'> </span>
          <span className='line'></span>
          </div>
          <div className='education-block bcs-block'>
           <strong><p className='bottom-gap'><span> <MdOutlineSchool /></span> { EducationData[3].degree }</p></strong>
            <p className='bottom-gap'> { EducationData[3].institute} </p>
            <p className='bottom-gap'><span> < CiLocationOn /></span> { EducationData[3].place} </p>
            <p> <span> < GoCalendar /></span> { EducationData[3].year} </p>
          </div>
        
        </div>


        <div className='education-section'>
          <h3 className='education'> Experience </h3>
          <div className='education-block'>
            <strong><p className='bottom-gap'> { ExperienceData[0].designation }</p></strong>
            <p className='bottom-gap'> { ExperienceData[0].company }</p>
            <p><span> < CiLocationOn /></span> { ExperienceData[0].place }</p>
          </div>
          <div>
          <span className='dot'> </span>
          <span className='line'></span>
          </div>
          <span></span>
        
        </div>

      </div>
    </>
  )
}

export default Qualification;
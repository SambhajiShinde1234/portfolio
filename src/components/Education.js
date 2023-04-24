import React from 'react';
// import EducationData from '../components/EducationData';
// import ExperienceData from '../components/ExperienceData';

import '../styles/Education.css';


// function Education() {


//     const EducationCardItems = EducationData.map( CardItems => 

//         <li key={CardItems.id} className='card'>
//             <p> {CardItems.degree} </p>
//             <p> {CardItems.institute} </p>
//             <p> {CardItems.place} </p>
//             <p> {CardItems.year} </p>
//         </li>  

//     );


function Education({eduexp}) {


    const EducationCardItems = eduexp.map( CardItems => 

        <div className='card'>
            <li key={CardItems.id} >
                    <strong> 
                    <p> {CardItems.degree} </p> 
                    </strong>
                    <p> {CardItems.institute} </p>
                    <p> {CardItems.place} </p>
                    <p> {CardItems.year} </p>
            </li>  
        </div>

    );
    
  return (
        <>
            <div className='card-container'>
                 { EducationCardItems }
            </div>
        </>
    );
}

export default Education;
import React from 'react';
import ProjectData from '../components/ProjectData';
import '../styles/Project.css';

function Project() {

  const ProjectCardItems = ProjectData.map( ProjectCardItems => 
    <>
    <div className='card-container'>
      <div className='project-left-section'>
        <img src={ ProjectCardItems.imageUrl} alt={ ProjectCardItems.alternateText} className='project-image'/>
      </div>
      <div className='project-right-section'>
        <strong><p> {ProjectCardItems.title }</p></strong>
        <p>Live link - { ProjectCardItems.siteUrl }</p>
        <p>Used technologies - <span className='used-technology'> { ProjectCardItems.technology } </span></p>
      </div>
    </div>
    </>
  );
  
return (
      <>
          <h2> Project </h2>
          <p className ='project-sub-heading'> Here are my projects </p>
          <div>
               { ProjectCardItems }
          </div>
      </>
  );
}


export default Project;
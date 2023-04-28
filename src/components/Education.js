import React from "react";

import "../styles/Education.css";

function Education({ eduexp }) {
  const EducationCardItems = eduexp.map((CardItems) => (
    <div className="card">
      <li key={CardItems.id}>
        <strong>
          <p> {CardItems.degree} </p>
        </strong>
        <p> {CardItems.institute} </p>
        <p> {CardItems.place} </p>
        <p> {CardItems.year} </p>
      </li>
    </div>
  ));

  return (
    <>
      <div className="card-container">{EducationCardItems}</div>
    </>
  );
}

export default Education;

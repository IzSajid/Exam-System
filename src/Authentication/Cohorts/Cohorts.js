import React from 'react';

const Cohorts = ({name,startDate,students}) => {
    return (
        <div>
             <div className="cohort">
      <h2>{name}</h2>
      <p>Start Date: {startDate}</p>
      <ul>
        {students.map((student, index) => (
          <li key={index}>{student}</li>
        ))}
      </ul>
    </div>
        </div>
    );
};

export default Cohorts;
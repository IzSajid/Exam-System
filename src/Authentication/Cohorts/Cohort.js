import React from 'react';
import Cohorts from './Cohorts';

const Cohort = () => {
    const cohorts = [
        {
          name: 'Cohort A',
          startDate: '2023-01-15',
          students: ['Student 1', 'Student 2', 'Student 3'],
        },
        {
          name: 'Cohort B',
          startDate: '2023-02-20',
          students: ['Student 4', 'Student 5', 'Student 6'],
        },
      ];
    return (
        <div>
            <div className="App">
      <h1>React Cohorts</h1>
      {cohorts.map((cohort, index) => (
        <Cohorts key={index} {...cohort} />
      ))}
    </div>
            
        </div>
    );
};

export default Cohort;
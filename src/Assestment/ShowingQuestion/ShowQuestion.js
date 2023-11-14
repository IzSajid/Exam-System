import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import McqQuestion from './McqQuestion';

const ShowQuestion = () => {
    const {id,formId}=useParams();
    // const formId=useParams({});
    const [mcqs,setmcq]=useState([])
    
    useEffect(() => {
          // Ensure formId is properly set here
          console.log(formId);
        const url=`http://localhost:5000/classes/${id}/${formId}/question`
        console.log(url)
        axios.get(url)
          .then((response) => {
           
            setmcq(response.data);
            console.log(response.data);
            // Further operations with the response data...
          })
          .catch((error) => {
            console.error(error);
          });
         
      }, [id, formId]);
    
    return (
        <div className='mx-auto grid grid-cols-1 w-50 text-center '>
            <h1>MCQ Question</h1>
            <div>
            {
  mcqs.length > 0 && mcqs.map((mcq, index) => (
    <McqQuestion key={index} mcq={mcq} />
  ))
}
            </div>
          
            
        </div>
    );
};

export default ShowQuestion;
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const Questions = () => {
    const {id,formid}=useParams();
    const [data,setData]=useState([])

    const url=`http://localhost:5000/classes/${id}/${formid}/question`
    console.log(url);
    

   
    return (
        <div>


            
        </div>
    );
};

export default Questions;
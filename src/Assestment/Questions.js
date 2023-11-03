import React, { useEffect, useState } from 'react';
import Data from './Database/Data';

const Questions = () => {
    const [checked,setChecked]=useState(undefined)
    const question=Data[0];
    useEffect(()=>{
        console.log(question);
    }
    ,[])


    const onSelect=()=>{
        setChecked(true);
        console.log('readme')



    }
    return (
        <div className='questions text-white text-center'>
            <h2>Sample Question</h2>
           <div className='h-auto w-50 bg-teal-900 mx-auto'>
           <p>{question.question}</p>
            <ul key={question.id} className='grid grid-cols-2 gap-4 mb-3'>
                {/* mapping each option  */}
             {
                question.options.map((eachquestion,i)=>(                    <li key={i}>
                    <input type='radio' value={false} name='option' id={`eachquestion${i}-option`} onChange={()=>onSelect()}></input>

                    <label htmlFor={`eachquestion${i}-option`}>{eachquestion}
                    </label>
                    <div className='check checked'></div>
                </li>

                ))
             }
            </ul>
          
           </div>
        </div>
    );
};

export default Questions;
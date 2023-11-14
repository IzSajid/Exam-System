import { CheckBox } from '@mui/icons-material';
import { Checkbox } from 'flowbite-react';
import React from 'react';

const McqQuestion = ({mcq}) => {
    console.log('mcq',mcq)
    const{question,options}=mcq;
    return (
        <div className='bg-gray-100 h-auto mb-3 w-auto'>
           

         <h5 className=''>Question- {question}</h5>

            
         <div>
               
           <ul className=''>
          
          {options.map((option, index) => (
            <li className='shadow-lg shadow-slate-600 border h-16 text-center font-semibold mb-4 w-75 mx-auto rounded'  key={index}>{option}<Checkbox className='check ml-4 border border-black' {...option} defaultUnchecked />
            </li>
        
      ))}
        
    
    </ul>
         </div>
           </div>

            
       
    );
};

export default McqQuestion;
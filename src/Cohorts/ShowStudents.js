import React, { useEffect, useState } from 'react';
import './ShowStudents.css'
import { Button } from 'react-bootstrap';



const ShowStudents = () => {
    const[students,setStudents]=useState([]);

    
    useEffect(()=>{
        fetch('http://localhost:5000/students')
        .then(res=>res.json())
        .then(data=>setStudents(data))
    },[])
    return (
        <div>
            <h1 className='mt-4 mb-5 text-center'>People in the class {students.length}</h1>
          <ul className='grid grid-cols-1 gap-4 mx-auto'>

  
        {
            students.map(student=>
                <li className=' shadow-lg shadow-indigo-500/50 border h-16 text-center font-semibold grid grid-cols-3'>
                    <div class="relative w-11 h-6 overflow-hidden  rounded-full ml-40 mt-2">
            <svg class="relative w-11 h-6 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                
                <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
        </div>
               
        {student.email}
        <Button className='btn btn-sm btn-circle mt-3' variant='white'>x</Button>
        
        
        </li>
       
       )

        }
     
 </ul>
           
            
        </div>
    );
};

export default ShowStudents;
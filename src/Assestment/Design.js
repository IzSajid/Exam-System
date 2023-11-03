import React from 'react';
import './Quizz.css';  
import { Button } from 'react-bootstrap';
import Questions from './Questions';
const Design = () => {
    // next button event handler 
     const handleNext=()=>{
        console.log('on click next')
        
     }

     //previous button event handler
     const handlePrev=()=>{
        console.log('on previous click')
     }
    return (
        <div className='bg-dark'>
            <div className='text-center'>
                <h1 className=''>Quizz</h1>
                

            </div>
            {/* <div style={{width:'70%', height:'auto'}} className='shadow-lg p-3 mb-5  bg-dark text-white mx-auto rounded '>
                <h2>Question 1 out of 5</h2>
                <h3>NSU is what?</h3>
                <ul>
                    <li>Big Business Institution</li>
                    <li>Very Big business Institution</li>
                    <li>Small Business Institution</li>
                    <li>Very small Business Institution</li>
                    </ul> */}

                    {/* display the questions  */}
                    <Questions></Questions>
                   


                    <div className='grid grid-cols-2'>
                    <Button onClick={()=>handlePrev()} className='btn btn-info btn-sm w-24'>Prev</Button>
                <Button onClick={()=>handleNext()} className='btn btn-secondary btn-sm w-24'>Next</Button>
               

            </div>
                    </div>
            



          
           
            
      
    );
};

export default Design;
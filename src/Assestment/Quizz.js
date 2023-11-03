import React from 'react';
import './Quizz.css';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import { Button } from 'flowbite-react';
import { Link } from 'react-router-dom';
import { Form } from 'react-bootstrap';


const Quizz = () => {
    const [user]=useAuthState(auth);
    return (
        <div className='start-quizz shadow-lg text-center text-white mt-24 mx-auto w-50 h-auto'>
            <div className='border border-x-lime-500 '>
                <h1>Assesment</h1>

            </div>


            
           <div className='d-flex justify-content-center align-items-center'>
            
           <Form  id='form'>
                <Form.Group className="mb-3 mt-4" controlId="formBasicEmail">
            <Form.Label className="mb-3" >Email address</Form.Label>
            <Form.Control
            style={{width:'350px'}}
             className=' mb-3'
              type="email"
              name="email"
              value={user?user.email:''}
              disabled
            />
            </Form.Group>
                      
                </Form>
            
               
           </div>
           <Link to='/design'><Button className='btn btn-dark mb-8'>Start Quizz</Button></Link>
              
               


                
            


           
            
        </div>
    );
};

export default Quizz;
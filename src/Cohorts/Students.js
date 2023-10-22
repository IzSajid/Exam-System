import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import ShowStudents from './ShowStudents';
import Menu from './Menu';
import './Students.css'

const Students = () => {
  
    
    const handleSubmit=e=>{
        e.preventDefault()
        const email=e.target.email.value;
        const addStudent={email};
        fetch('http://localhost:5000/student',{
            method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(addStudent),
  })
  .then(res=>res.json())
  .then(data=>console.log(data))
    }
   
    return (
      <div>
        
      
      
            <Form onSubmit={handleSubmit} className='w-50 mx-auto'>
          <Form.Group className="mb-3 mt-4" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Enter email"
              required
            />
          </Form.Group>
          <Button className='w-25  mx-auto d-block mb-4 mt-4' variant="primary" type='submit'>Submit</Button>
          <ShowStudents></ShowStudents>
          </Form>
          </div>
          
        
            
    );
};

export default Students;
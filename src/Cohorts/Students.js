import React, { useEffect, useState } from 'react';
// import { Button, Form } from 'react-bootstrap';
import ShowStudents from './ShowStudents';
import './Students.css'

const Students = () => {
  const [recipientEmail, setRecipientEmail] = useState('');
  const [message, setMessage] = useState('');

  
    
    const handleSubmit=async (e)=>{
        e.preventDefault()
        try {
          const response = await fetch('http://localhost:5000/student', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ recipient: recipientEmail }),
          });
    
          if (response.ok) {
            setMessage('Invitation sent successfully!');
          } else {
            setMessage('Failed to send invitation. Please try again.');
          }
        } catch (error) {
          setMessage('An error occurred. Please try again later.');
        }
      };
  //       const email=e.target.email.value;
  //       const addStudent={email};
  //       fetch('http://localhost:5000/student',{
  //           method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  //   body: JSON.stringify(addStudent),
  // })
  // .then(res=>res.json())
  // .then(data=>console.log(data))
    
   
    return (
      
        
        <div>
      <h1>Email Invitation Form</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="recipientEmail">Recipient's Email:</label>
        <input
          type="email"
          id="recipientEmail"
          name="recipientEmail"
          value={recipientEmail}
          onChange={(e) => setRecipientEmail(e.target.value)}
          required
        />
        <button type="submit">Send Invitation</button>
      </form>
      <div>{message}</div>
      <ShowStudents></ShowStudents>
    </div>
        
            
    );
};

export default Students;
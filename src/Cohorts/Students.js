import React, { useEffect, useState } from 'react';
// import { Button, Form } from 'react-bootstrap';
import ShowStudents from './ShowStudents';
import './Students.css'
import { Button } from 'react-bootstrap';

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

            // for auto reload the page after successfully adding an email 

            setTimeout(() => {
              window.location.reload();
            }, 2000);

          } 
          
          else {
            setMessage('Failed to send invitation. Please try again.');
          }
        } 
        catch (error) {
          setMessage('An error occurred. Please try again later.');
        }
      };
  
    
   
    return (
      
        
        <div>
      <h1 className='text-center mt-4'>Email Invitation Form</h1>
      <form style={{textAlign:'center'}} onSubmit={handleSubmit}>
        <label  htmlFor="recipientEmail">Recipient's Email:</label>
        <input style={{marginLeft:'15px',marginBottom:'15px',marginTop:'15px'}}
          type="email"
          id="recipientEmail"
          name="recipientEmail"
          value={recipientEmail}
          onChange={(e) => setRecipientEmail(e.target.value)}
          required
        />
        <Button className="black w-25  mx-auto d-block mb-4 mt-4" variant="primary" type='submit'>
                Send Invitation
        </Button>
      </form>
      <div className='text-center mb-4 text-red-700 font-bold'>{message}</div>
      <ShowStudents></ShowStudents>
    </div>
        
            
    );
};

export default Students;
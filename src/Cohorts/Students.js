import React, { useEffect, useState } from 'react';
// import { Button, Form } from 'react-bootstrap';
import ShowStudents from './ShowStudents';
import './Students.css'
import { Button } from 'react-bootstrap';
import Menu from './Menu';
import { useParams } from 'react-router-dom';
import useClassById from '../Hooks/useClassById';

const Students = () => {
  const [recipientEmail, setRecipientEmail] = useState('');
  const [message, setMessage] = useState('');
  const [students, setStudents] = useState([]);


  // load the classes by id 
  const {id}= useParams();
  const [user]=useClassById(id);
  // useEffect(() => {
  //   // Fetch students for the specific class (based on classId)
  //   const url=`http://localhost:5000/classes/${id}/student`
  //   console.log(url);
  //   fetch(url)
  //     .then((res) => res.json())
  //     .then((data) => setStudents(data));
  // }, []);

  
    
    const handleSubmit=async (e)=>{
        e.preventDefault()
        try {
          const response = await fetch(`http://localhost:5000/classes/${id}/student`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              recipient: recipientEmail,
              students: students.map(student => ({ ...student, classId: id })),
            }),
          });
    
          if (response.ok) {
            setMessage('Invitation sent successfully!');

            // for auto reload the page after successfully adding an email 

           
              window.location.reload();
        

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
      
        
        <div >
          <div>

          </div>
          <div className='grid grid-cols-12 gap-2'>
         <div className='grid col-span-2'>
         <Menu></Menu>
         </div>
      <div className='grid col-span-10'>
      <h1 className='text-center mt-4'>Email Invitation Form {user.name}</h1>
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
    </div>
    </div>
        
            
    );
};

export default Students;
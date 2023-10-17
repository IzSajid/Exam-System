import { Chip, Divider } from '@mui/material';
import React from 'react';
import { Button, Form } from 'react-bootstrap';

const Createclass = () => {
    const handleCreateClass=e=>{
        e.preventDefault();
        const email=e.target.email.value;
        const id=e.target.id.value;

        const newClass={email,id}

        // send data to server 
        fetch('http://localhost:5000/class',{
            method:'POST',
            headers:{
                'content-type':'application/json',
            },
            body:JSON.stringify(newClass)

        })
        .then(res=>res.json())
        .then(data=>{console.log('success',data)})

    }
    return (
            <div className="shadow-lg p-3 mb-5 bg-gray-700 rounded w-50 mx-auto text-white" style={{ width: '10rem',height:'24rem',marginTop:'70px' }}>
                <h1 className='text-center mb-2'>Create new Class</h1>


             {/* divid from the form     */}
             <Divider className='h-6 mb-3' >
             <Chip/>
            </Divider>
             {/* divider end  */}
   
   {/* input form start for new class  */}
   <Form onSubmit={handleCreateClass}>
  <Form.Group  className="mb-6 w-50 mx-auto" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control name='email' type="email" placeholder="Enter email" />
              </Form.Group>
        
              <Form.Group className="mb-6 w-50 mx-auto" controlId="formBasicPassword">
                <Form.Label>Class Code</Form.Label>
                <Form.Control name='id' type="password" placeholder="Password" />
              </Form.Group>

              {/* submitting the form through button by declaring button type submit  */}
              <Button variant="primary" type="submit" className="black w-50  mx-auto d-block mb-8 mt-8">
                Submit
              </Button>
              {/* button end  */}


            </Form>
            </div>
        
    );
};

export default Createclass;
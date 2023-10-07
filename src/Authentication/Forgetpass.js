import React, { useState } from 'react';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import { Button, Form } from 'react-bootstrap';

const Forgetpass = () => {
    const [email,setEmail]=useState('');
    const [sendPasswordResetEmail, sending, error] =useSendPasswordResetEmail(auth);
    return (
        <div className=" shadow-lg p-3 mb-12 bg-white rounded w-50 mx-auto mt-12">
        <h2 className='text-center'>Reset Password</h2>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              value={email}
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" required />
          </Form.Group>
          <Button
            onClick={async () => {
              await sendPasswordResetEmail(email);
             
            }}
            className="w-50  mx-auto d-block mb-2"
            variant="primary"
            type="submit"
          >
            Reset Password
          </Button>
        </Form>
      </div>
    );
};

export default Forgetpass;
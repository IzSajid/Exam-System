import React, { useState } from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';



const Signup = () => {
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);
  const handleSubmit=async(e)=>{
    e.preventDefault();
    const email=e.target.email.value;
    const password=e.target.password.value;
    await createUserWithEmailAndPassword(email,password)
  }
    return (
          <Card className="shadow-lg p-3 mb-5 bg-white rounded w-50 mx-auto" style={{ width: '15rem',height:'30rem',marginTop:'70px' }}>
            <Card.Body className=''>
            <div >
        <h2 className="text-center mt-3 mb-3">Please Register</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3 mt-4" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Enter email"
              required
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              placeholder="Password"
              required
            />
          </Form.Group>
          <input
            type="checkbox"
            name="terms"
            id="terms"
          ></input>
          <label
            htmlFor="terms"
          >
            Accept Terms and Condition
          </label>
            <Button
              className="black w-50  mx-auto d-block mb-4 mt-4"
              variant="dark"
              type='submit'
            >
              Sign Up
            </Button>
        </Form>
        <p>
          Already have an account?
          <Link to='/login' className='danger'>
            Please Login
          </Link>
        </p>

      </div>
            </Card.Body>
          </Card>
        );
      
};

export default Signup;
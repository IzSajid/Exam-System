import React, { useState } from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';



const Signup = () => {
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);
  let errorMessage
  const navigate=useNavigate()
  const handleSubmit=async(e)=>{
    e.preventDefault();
    const email=e.target.email.value;
    const password=e.target.password.value;
    const name=e.target.name.value;
    await createUserWithEmailAndPassword(email,password)
  }
  if(error){
    errorMessage=<p className="text-danger">Error: {error?.message}</p>;
  }
  // const navigateHome=()=>{
  //   navigate("/home");
  // }
  
  if(user){
    navigate('/home');
  }
    return (
          <Card className="shadow-lg p-3 mb-5 bg-white rounded w-50 mx-auto" style={{ width: '15rem',height:'33rem',marginTop:'70px' }}>
            <Card.Body className=''>
            <div >
        <h2 className="text-center mt-3 mb-3">Please Register</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3 mt-4" controlId="formBasicEmail">
            <Form.Label>User Name</Form.Label>
            <Form.Control
              type="name"
              name="name"
              placeholder="Enter your name"
              required
            />
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
        {errorMessage}
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
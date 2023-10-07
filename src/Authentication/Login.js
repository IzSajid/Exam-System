import React from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../firebase.init';

const Login = () => {
 const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);
  const navigate=useNavigate()

const handleSubmit=async(event)=>{
  const email=event.target.email.value;
  const password=event.target.password.value;
  event.preventDefault();
  await signInWithEmailAndPassword(email,password);
  navigate('/home');

}



    return (
        <Card className="shadow-lg p-3 mb-5 bg-white rounded w-50 mx-auto" style={{ width: '10rem',height:'30rem',marginTop:'70px' }}>
            <Card.Body>
            <div >
        <h2 className="text-center mt-3 mb-3">Please Login</h2>
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
            <Button
              className="black w-50  mx-auto d-block mb-4 mt-4"
              variant="dark"
              type='submit'
            >
              Login
            </Button>
        </Form>
        <p>
          Forget Password? 
          <Link> click here
          </Link>
        </p>
      </div>
            </Card.Body>
          </Card>
    );
};

export default Login;
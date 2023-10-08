import React from 'react';
import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Avatar } from '@mui/material';
const Header = () => {
  const [user]=useAuthState(auth);
  const navigate=useNavigate();
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary h-20 " bg="dark" data-bs-theme="dark">
    <Container>
      <Navbar.Brand href="/">Invigilator</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
         
          <NavDropdown style={{marginLeft:"49rem"}} title="Features" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Notification</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Grades
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Feed</NavDropdown.Item>
            <NavDropdown.Divider />
          </NavDropdown>
        </Nav>
        <Nav>
        <Nav.Link className='mr-3' href="#">New Class</Nav.Link>
          <Nav.Link  className='mr-3' href="#">Join Class</Nav.Link>
        {
          user? (<Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />) :
          (<button onClick={()=>navigate('/signup')} className="btn btn-sm btn-active btn-primary ml-3 mt-1">SignUP</button>)

        } 

        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
};

export default Header;
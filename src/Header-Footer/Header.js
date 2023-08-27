import React from 'react';
import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';

const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary" bg="dark" data-bs-theme="dark">
    <Container>
      <Navbar.Brand href="#home">Virtual Hashor</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
         
          <NavDropdown title="Features" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Notification</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Grades
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Feed</NavDropdown.Item>
            <NavDropdown.Divider />
          </NavDropdown>
        </Nav>
        <Nav>
        <Nav.Link href="#">New Class</Nav.Link>
          <Nav.Link href="#">Join Class</Nav.Link>
          <Nav.Link href="#">My profile</Nav.Link>

        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
};

export default Header;
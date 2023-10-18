import React from 'react';
import { Container, Dropdown, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../firebase.init';
import { useAuthState, useSignOut } from 'react-firebase-hooks/auth';
import { Avatar, Box, Divider, IconButton, ListItemIcon, Menu, MenuItem, Tooltip, Typography } from '@mui/material';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import { AccountCircle } from '@mui/icons-material';
const Header = () => {
  const [user]=useAuthState(auth);
  const [signOut] = useSignOut(auth);
  const navigate=useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary h-20 " bg="dark" data-bs-theme="dark">
    <Container>
      {/* Web title */}
      <Navbar.Brand href="/">Virtual Hashor</Navbar.Brand>


      {/* navbar menu  */}
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
         
          <NavDropdown style={{marginLeft:"52rem"}} title="Features" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Notification</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Grades
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Feed</NavDropdown.Item>
            <NavDropdown.Divider />
          </NavDropdown>
        </Nav>
        <Nav>
        <Nav.Link  className='mr-3' href="/createclass">New Class</Nav.Link>
          <Nav.Link  className='mr-3' href="/showclasses">Join Class</Nav.Link>
          </Nav>


          {/* condition menu if user exist showing user profile picture unless signup button  */}
        {
          user? (
            <React.Fragment>
  <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center',fontSize: '10rem' }}>
    <Tooltip title="Profile">
      <IconButton
        aria-label="account of current user"
        aria-controls="account-menu"
        aria-haspopup="true"
        onClick={handleClick}
        color="white"
        sx={{ fontSize: '10rem' }}
      >
        <AccountCircle />
      </IconButton>
    </Tooltip>
  </Box>
  <Menu
    anchorEl={anchorEl}
    id="account-menu"
    open={open}
    onClose={handleClose}
    onClick={handleClose}
    PaperProps={{
      elevation: 0,
      sx: {
        overflow: 'visible',
        filter: 'drop-shadow(0px 6px 10px rgba(0,0,0,0.32))',
        mt: 1.5,
        '& .MuiAvatar-root': {
          width: 20,
          height: 20,
          ml: -0.5,
          mr: 1,
        },
        '& .MuiMenu-paper:before': {
          width: '50px', // Increase the width for the dropdown arrow
          height: '50px', // Increase the height for the dropdown arrow
          backgroundColor: 'background.paper',
          transform: 'translateY(-50%) rotate(45deg)',
          zIndex: 0,
        },
      },
    }}
    transformOrigin={{ horizontal: 'right', vertical: 'top' }}
    anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}

    // drop down menu item
  >
    <MenuItem onClick={handleClose}>
      <Avatar /> Profile
    </MenuItem>
    <MenuItem onClick={handleClose}>
      <ListItemIcon>
        <PersonAdd fontSize="small" />
      </ListItemIcon>
      Invite
    </MenuItem>
    <MenuItem onClick={handleClose}>
      <ListItemIcon>
        <Settings fontSize="small" />
      </ListItemIcon>
      Settings
    </MenuItem>
    <MenuItem onClick={signOut}>
      <ListItemIcon>
        <Logout fontSize="small"  />
      </ListItemIcon>
      Logout
    </MenuItem>
  </Menu>
</React.Fragment>

            

        ) :
          (<button onClick={()=>navigate('/login')} className="btn btn-sm btn-active btn-primary ml-3 mt-1">Login</button>)

        } 

        
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
};

export default Header;
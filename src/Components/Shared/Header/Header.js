import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hook/useAuth';

const Header = () => {
  const {user , logOut } = useAuth()
  return (
    
      <>
    <Navbar bg="dark" variant="dark" collapseOnSelect expand="lg" className='nav' >
    <Container>
    <Navbar.Brand as={Link} to="/home">Travel Guru</Navbar.Brand>
    <Nav className="me-auto">
      
      
    </Nav>
    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
    <Nav.Link as={Link} to="/home">Home</Nav.Link>
      <Nav.Link as={Link} to="/services">Services</Nav.Link>
      <Nav.Link as={Link} to="/contact">Contact Us</Nav.Link>
     
      {user?.email ?
      <Nav.Link onClick={logOut} as={Link} to="/login"><button className='btn btn-primary'>LogOut</button></Nav.Link>:
      <Nav.Link as={Link} to="/login"><button className='btn btn-primary'>LogIn</button></Nav.Link>}
      <Navbar.Text>
        Signed in as: <Link to="/login"><span className='text-warning'>{user?.displayName}</span> </Link>
      </Navbar.Text>
    </Navbar.Collapse>
    </Container>
  </Navbar>
  <br />
 
        
        </>
  );
};

export default Header;
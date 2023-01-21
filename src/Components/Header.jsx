import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Link style={{color:'white',fontWeight:"bold"}} className="nav-item nav-link" to="/">🖥 React Application 🖥</Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"> 
          </Nav>
          <Nav> 
            <Link to="/" className="nav-item nav-link">Home</Link>
            <Link to="About" className="nav-item nav-link">About</Link>
            <Link to="Services" className="nav-item nav-link">Services</Link>
            <Link to="Contact" className="nav-item nav-link">Contact</Link> 
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default Header

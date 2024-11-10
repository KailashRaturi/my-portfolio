import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import "./index.css";
const NavBar = () => {
  return (
    <Navbar className='home' expand="lg" fixed="top">
      <Navbar.Brand href="#home" >My Portfolio</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarNav" />
      <Navbar.Collapse id="navbarNav">
        <Nav className="ms-auto" >
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="#projects">Projects</Nav.Link>
          <Nav.Link href="#blog">Blog</Nav.Link>
          <Nav.Link href="#services">Services</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;

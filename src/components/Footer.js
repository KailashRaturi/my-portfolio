import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="py-4 bg-dark text-white text-center">
      <Container>
        <p>&copy; 2024 My Portfolio. All Rights Reserved.</p>
        <p>
          <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a> | 
          <a href="mailto:kailashraturi8@gmail.com"> Email</a>
        </p>
      </Container>
    </footer>
  );
};

export default Footer;

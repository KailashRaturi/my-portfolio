import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { useSpring, animated } from 'react-spring';
import "./index.css";
const AboutSection = () => {
  const props = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1000 },
  });

  return (
    <section id="about" className="py-5 bg-light" data-aos="zoom-in">
      <Container >
        <Row>
          <Col className='about' md={6} >
            <animated.h2 style={props}>About Me</animated.h2>
            <animated.p style={props}>
              Hello! My Name is Kailash. I Have Done My Bca From Klsd Now I Am Pursuing My Mca 
              From Lpu Distance.I'm a passionate front-end developer with a knack for creating beautiful and responsive
              websites.
            </animated.p>
          </Col>
          <Col md={6}>
            <Image src="https://cdn-icons-png.flaticon.com/512/9203/9203764.png" id="check" roundedCircle fluid   />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutSection;

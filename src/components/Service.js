import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';  // Importing Bootstrap components
import './index.css';  // Custom styles for the Service component

const Service = () => {
  const services = [
    {
      title: 'Web Development',
      description: 'Building responsive and high-performing websites with modern technologies.',
      icon: '🌐',
    },
    {
      title: 'UI/UX Design',
      description: 'Creating user-friendly and beautiful designs for websites and mobile apps.',
      icon: '🎨',
    },
    {
      title: 'App Development',
      description: 'Developing custom mobile apps for iOS and Android with the latest frameworks.',
      icon: '📱',
    },
    {
      title: 'Backend Development',
      description: 'Building scalable and secure backend systems to power your apps.',
      icon: '⚙️',
    },
  ];

  return (
    <section id="services" className="services-section py-5" data-aos="fade-right">
      <div className="container">
        <h2 className="text-center mb-5">My Services</h2>
        <Row>
          {services.map((service, index) => (
            <Col md={6} lg={3} key={index} className="mb-4">
              <Card className="service-card text-center">
                <Card.Body>
                  <div className="service-icon">{service.icon}</div>
                  <Card.Title className="service-title">{service.title}</Card.Title>
                  <Card.Text className="service-description">
                    {service.description}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
};

export default Service;

import React from 'react';
import { Card, Button } from 'react-bootstrap';
const ProjectCard = ({ title, description, image, link }) => {
  return (
    <Card className="mb-4" style={{ width: '100%', height: '100%', }}>
      <Card.Img variant="top" src={image}   style={{ height: '200px', width: '100%', objectFit: 'contain' }}/>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button variant="primary" href={link} target="_blank">
          View Project
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ProjectCard;

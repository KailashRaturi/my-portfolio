import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProjectCard from './ProjectCard';
import "./index.css";
const ProjectsSection = () => {
  const projects = [
    {
      title: 'Pokemon Cards',
      description:'Pokémon cards are primarily used in the Pokémon Trading Card Game, a competitive game where players use decks of cards to battle each other in order to win.',
      image: 'https://i.pinimg.com/originals/2b/46/73/2b4673e318ab94da17bbf9eaad5b80d6.png',
      link: 'https://pokemon-yyit.onrender.com',
    },
    {
      title: 'Weather App',
      description: ' Weather apps provide up-to-the-minute weather information, helping users know the temperature, humidity, wind speed or alerts in their area.',
      image: 'https://cdn-icons-png.flaticon.com/512/7477/7477790.png',
      link: 'https://weatherproject-kjv9.onrender.com',
    },{
      title: 'To-Do List',
      description:'A to-do app is used to help individuals organize, track, and manage their tasks.The primary purpose of a to-do app is to increase productivity',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqRKde-94b1A5VFw-efZ0tps-hIxoWpAAAtw&s',
      link: 'https://todoapi-7ap3.onrender.com',
    }
   
  ];

  return (
    <section id="projects" className="py-5">
      <Container>
        <h2 className="text-center mb-4 mt-4">My Projects</h2>
        <Row className="g-5">
          {projects.map((project, index) => (
            <Col key={index} md={4} sm={12} data-aos="fade-up" data-aos-delay={`${index * 100}`}>
              <ProjectCard {...project} />
            </Col>
          ))} 
        </Row>
      </Container>
    </section>
  );
};

export default ProjectsSection;

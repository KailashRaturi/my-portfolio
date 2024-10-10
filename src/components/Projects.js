import React from 'react';
import ProjectCard from './ProjectCard';

const projects = [
  { title: 'Weather',
     description: 'A weather app is a digital tool designed to provide users with real-time weather information, forecasts, and alerts for specific locations. It enhances daily decision-making by offering data on temperature, humidity, precipitation, wind speed, and atmospheric pressure.',
      image: 'weather-app.png',
      link: 'https://weatherproject-kjv9.onrender.com', // Link to the project
    },
  { title: 'Pokemon Card', 
    description: 'Pokémon cards are primarily used for collecting and playing the Pokémon Trading Card Game (TCG). They feature various Pokémon characters, each with unique abilities, strengths, and weaknesses.',
    image: 'pokeball.png',
    link: 'https://pokemon-yyit.onrender.com',
 },
  
];

const Projects = () => {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;

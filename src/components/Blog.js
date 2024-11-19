import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';  
import './index.css';  

const Blog = () => {
  const blogPosts = [
    {
      title: 'How to Build a Portfolio Website',
      summary: 'Learn the step-by-step process of creating a professional portfolio website to showcase your work.',
      link: 'https://www.freecodecamp.org/news/beginners-guide-to-creating-a-portfolio-website/',  
    },
    {
      title: 'Understanding React Lifecycle Methods',
      summary: 'A deep dive into React component lifecycle methods and how they can enhance your app development.',
      link: 'https://www.freecodecamp.org/news/react-component-lifecycle-methods/',
    },
    {
      title: 'CSS Grid vs Flexbox: Which One to Use?',
      summary: 'A comparison between CSS Grid and Flexbox, and when to use each for responsive layouts.',
      link: 'https://www.simplilearn.com/tutorials/css-tutorial/css-grid-vs-flexbox#:~:text=Alignment%3A%20Aligning%20elements%20on%20a,better%20for%20one%2Ddimensional%20designs.',
    },
    {
      title: 'The Importance of Web Accessibility',
      summary: 'Why accessibility is crucial in modern web design, and how to make your site more inclusive.',
      link: 'https://www.forbes.com/councils/forbesbusinesscouncil/2023/03/20/understanding-the-importance-of-web-accessibility/',
    },
  ];

  return (
    <section id="blog" className="blog-section py-5">
      <div className="container">
        <h2 className="text-center mb-5">Blog</h2>
        <Row>
          {blogPosts.map((post, index) => (
            <Col md={15} lg={3} sm={12} key={index} className=" Blog mb-4" data-aos="zoom-out">
              <Card className="blog-card">
                <Card.Body>
                  <Card.Title className="blog-title">{post.title}</Card.Title>
                  <Card.Text className="blog-summary">{post.summary}</Card.Text>
                  <a href={post.link} className="btn btn-primary">Read More</a>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
};

export default Blog;

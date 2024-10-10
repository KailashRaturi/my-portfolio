import React from 'react';
import Header from './components/Header';
import Projects from './components/Projects';
import Footer from './components/Footer';
import About from './components/About';

import Contact from './components/Contact'; 


import './styles.css';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Projects />
      <About />
      <Contact />
      <Footer />
      
    </div>
  );
};


export default App;


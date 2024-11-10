import React,{ useEffect }  from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';  
import NavBar from './components/Navbar';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Service from './components/Service';
import Blog from './components/Blog';
import './components/index.css';
function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,  // Set the duration of the animation
      easing: 'ease-in-out',  // Easing function
      once: true,  
    });
  }, []);
  return (
    <div className='Content'>
      <NavBar />
      <ProjectsSection />
      <Contact/>
      <Service/>
      <AboutSection />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;

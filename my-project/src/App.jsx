import React from 'react'
import './pages/Home.jsx';
import Navbar from './components/Navbar.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Projects from './pages/Projects.jsx';
import Contact from './pages/Contact.jsx';

export const App = () => {
  return (
    <div className="scroll-smooth">
    <Navbar />
    <Home />
    <About />
    <Projects />
    <Contact />
    </div>
  )
}

export default App;


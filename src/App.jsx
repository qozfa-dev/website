import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from 'react';
import Navbar from './components/Navbar.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Projects from './pages/Projects.jsx';
import ProjectDetail from './pages/ProjectDetail.jsx';
import Contact from './pages/Contact.jsx';

export const App = () => {

  const [darkMode, setDarkMode] = useState(() =>
      localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    const root = document.documentElement;

    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);


  return (
    <BrowserRouter>
    <div className="bg-[#FFF8F0] dark:bg-[#111827]">
    <div className="scroll-smooth bg-[#FFF8F0] dark:bg-[#111827] transition-colors">
    <Navbar theme={darkMode} setTheme={setDarkMode}/>
    <Routes>
      <Route path="/" element={<>
      <Home />
      <About />
      <Projects />
      <Contact />
      </>} />
      <Route path="/projects/:slug" element={<ProjectDetail />} />
    </Routes>
    </div>
    </div>
    </BrowserRouter>
  );
};

export default App;


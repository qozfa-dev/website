import { useEffect, useState } from 'react';
import Navbar from './components/Navbar.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Projects from './pages/Projects.jsx';
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

  


  // const [theme, setTheme] = useState('dark');
  
  // useEffect(() => {
  //   if (theme === "dark") {
  //     document.documentElement.classList.add("dark");
  //     localStorage.theme = "dark";
  //   } else {
  //     document.documentElement.classList.remove("dark");
  //     localStorage.theme = "light";
  //   }
  // }, [theme]);


  return (
    <div className="scroll-smooth bg-[#FFF8F0] dark:bg-[#111827] transition-colors">
    <Navbar theme={darkMode} setTheme={setDarkMode}/>
    <Home />
    <About />
    <Projects />
    <Contact />
    </div>
  );
};

export default App;


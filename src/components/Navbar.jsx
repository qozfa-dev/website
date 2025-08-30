import { useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";

const Navbar = ( {theme, setTheme} ) => {
  const [isOpen, setIsOpen] = useState(false);
  return (

    <>

    <nav className="hidden md:block text-[#000000] dark:text-[#FFFFFF] bg-[#FFF8F0] dark:bg-[#0D1117] justify-end items-center py-2 px-4 m-2 border-2 border-[#A78BFA] rounded-2xl w-fit sticky top-2 right-2 ml-auto">
    <ul className="flex space-x-9">
      <li className="hover:underline decoration-[#A78BFA] underline-offset-4 decoration-2"><a href="#Home">Home</a></li>
      <li className="hover:underline decoration-[#A78BFA] underline-offset-4 decoration-2"><a href="#About">About Me</a></li>
      <li className="hover:underline decoration-[#A78BFA] underline-offset-4 decoration-2"><a href="#Projects">Projects</a></li>
      <li className="hover:underline decoration-[#A78BFA] underline-offset-4 decoration-2"><a href="#Contact">Contact</a></li>
      <button
          onClick={() => setTheme(!theme)} className="hover:cursor-pointer">
            <img
              src={theme ? "/sun (2).svg" : "/moon.svg"}
              alt={theme ? "Light Mode" : "Dark Mode"}
              className="w-5 h-5"/>
        </button>
    </ul>
    </nav>

    {/* Mobile Navbar */}
      <nav className={`md:hidden text-[#000000] dark:text-[#FFFFFF] bg-[#FFF8F0] dark:bg-[#0D1117] hover:bg-[#FFEBD1] border-2 border-[#A78BFA] rounded-2xl py-2 px-4 sticky top-2 ${
        isOpen 
        ? 'mx-0 w-full box-border'
        : 'm-2 ml-auto w-fit' 
}`}>
        <div className="flex justify-between">
          <h1 className="text-lg font-bold text-[#A78BFA]"></h1>
          <button onClick={() => setIsOpen(!isOpen)} className="text-[#A78BFA] cursor-pointer">
            {isOpen ? <FaTimes size={22} /> : <GiHamburgerMenu size={22} />}
          </button>
        </div>

        {/* Dropdown Links */}
        {isOpen && (
          <nav>
            <ul>
              <li className="hover:underline decoration-[#A78BFA] underline-offset-4 decoration-2"><a href="#Home" onClick={() => setIsOpen(false)}>Home</a></li>
              <li className="hover:underline decoration-[#A78BFA] underline-offset-4 decoration-2"><a href="#About" onClick={() => setIsOpen(false)}>About Me</a></li>
              <li className="hover:underline decoration-[#A78BFA] underline-offset-4 decoration-2"><a href="#Projects" onClick={() => setIsOpen(false)}>Projects</a></li>
              <li className="hover:underline decoration-[#A78BFA] underline-offset-4 decoration-2"><a href="#Contact" onClick={() => setIsOpen(false)}>Contact</a></li>
            </ul>
            </nav>
        )}
      </nav>

        </>

  );
};

export default Navbar;
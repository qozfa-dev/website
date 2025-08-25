import React from 'react'

const Navbar = () => {
  return (
    <div className="text-[#FFFFFF] bg-[#0D1117] flex justify-end items-center py-2 px-4 m-2 border-2 border-[#A78BFA] rounded-2xl w-fit sticky top-2 right-2 ml-auto">
    <ul className="flex space-x-9">
      <li className="hover:underline decoration-[#A78BFA] underline-offset-4 decoration-2"><a href="#Home">Home</a></li>
      <li className="hover:underline decoration-[#A78BFA] underline-offset-4 decoration-2"><a href="#About">About Me</a></li>
      <li className="hover:underline decoration-[#A78BFA] underline-offset-4 decoration-2"><a href="#Projects">Projects</a></li>
      <li className="hover:underline decoration-[#A78BFA] underline-offset-4 decoration-2"><a href="#Contact">Contact</a></li>
    </ul>
    </div>
  )
}

export default Navbar;
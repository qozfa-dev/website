import React from 'react'

const Navbar = () => {
  return (
    <div className="text-[#FFFFFF] bg-[#0D1117] flex justify-end items-center py-2 px-4 m-2 border-2 border-[#A78BFA] rounded-2xl w-fit sticky top-2 right-2 ml-auto">
    <ul className="flex space-x-9">
      <li><a href="#Home">Home</a></li>
      <li><a href="#About">About Me</a></li>
      <li><a href="#Experience">Experience</a></li>
      <li><a href="#Projects">Projects</a></li>
      <li><a href="#Contact">Contact</a></li>
    </ul>
    </div>
  )
}

export default Navbar;
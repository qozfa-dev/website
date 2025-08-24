import React from 'react'

const Projects = () => {
  return (
    <section id="Projects" className="h-screen">
      <div className="px-10 py-5">
      <h2 className="text-[#A78BFA] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-sans font-bold mt-5 pt-15">Projects</h2>
      <div className="grid-rows-3 flex justify-between items-center mt-25">
        <div className="bg-[#1F2937] max-w-44 justify-center items-center rounded-2xl cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out m-5">
          <h2 className="text-[#A78BFA] text-center p-2 font-bold text-[20px]">Portfolio site</h2>
          <p className="text-[#E5E7EB] text-center p-4">This full-stack portfolio site showcases my personal projects with interactive components and resposivity</p>
        </div>
        <div className="bg-red-400 max-w-40">div 2</div>
        <div className="bg-red-800 max-w-40">div 3</div>
      </div>
      </div>
    </section>
  )
}

export default Projects;

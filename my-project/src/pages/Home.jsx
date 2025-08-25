import React from 'react'

const Home = () => {
  return (
    <section id="Home" className="h-screen">
    <div class="flex items-center justify-center h-full text-center">
        <div class="flex flex-col items-center">
        <h1 class="text-[#A78BFA] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-sans font-bold">Qozfa Hussain</h1>
        <h2 class="text-[#E5E7EB] pt-5 mt-3.5 md:text-2xl lg:text-2.1x1">2nd Year CS Student at King’s College London</h2>
        <h2 class="text-[#E5E7EB] md:text-2xl lg:text-2.1x1">STEMM '25 Hackathon Winner</h2>
        <div class="flex flex-row mt-7 justify-center w-full">
        <button type="button" class="bg-[#A78BFA] text-white border-none mr-5 m-2 px-2 py-2.5 rounded-2xl hover:bg-purple-700 active:bg-[#A78BFA] cursor-pointer">About Me</button>
        <button type="button" class="bg-[#A78BFA] text-white border-none ml-5 m-2 px-2 py-2.5 rounded-2xl hover:bg-purple-700 active:bg-[#A78BFA] cursor-pointer">Projects</button>
        </div>
        </div>
    </div>
    </section>
  )
}

export default Home;

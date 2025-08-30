import React from 'react'

const Contact = () => {
  return (
    <section id="Contact" className="min-h-screen pt-10">
    <div className="px-10 py-5">
        <h2 className="text-[#8B5CF6] dark:text-[#A78BFA] text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-sans font-bold mt-5 pt-15">Contact</h2>
        
        <div className="space-y-4 flex flex-col justify-center items-center mt-10">
          <p className="mt-15 text-[#1F2937] dark:text-[#E5E7EB] sm:text-1.5xl md:text-2xl lg:text-2.5xl">Email me to get in touch!</p>
            <button className="flex justify-center container mt-5 flex-1 max-w-[60px] sm:max-w-[90px] xs:max-w-[70px] md:max-w-[120px] lg:max-w-[160px] text-xs sm:text-sm md:text-base lg:text-lg bg-[#8B5CF6] dark:bg-[#A78BFA] text-white border-none mr-5 m-2 px-2 py-2.5 rounded-2xl hover:bg-purple-700 active:bg-[#A78BFA] cursor-pointer">Email Me</button>
        </div>
    </div>
    </section>
  )
}

export default Contact; 
import React from 'react'

const Contact = () => {
  return (
    <section id="Contact" className="h-screen">
    <div className="px-10 py-5">
        <h2 className="text-[#A78BFA] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-sans font-bold mt-5 pt-15">Contact</h2>
        <p className="text-[#E5E7EB] pt-15 text-2xl">Feel free to connect with me!</p>
        <div className=" space-y-4 mt-15">
            <li className="text-white list-none"><a href="https://www.linkedin.com/in/qozfa-h/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            <li className="text-white list-none"><a href="https://github.com/qozfa-dev" target="_blank" rel="noopener noreferrer">Github</a></li>
            <li className="text-white list-none"><a href="https://www.linkedin.com/in/qozfa-h/" target="_blank" rel="noopener noreferrer">Email</a></li>
        </div>
    </div>
    </section>
  )
}

export default Contact; 
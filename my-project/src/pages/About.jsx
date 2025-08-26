import React from 'react'

const About = () => {
  return (
    <section id="About" className="h-screen">
        <div className="px-10 py-5">
            <h2 className="text-[#A78BFA] text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-sans font-bold mt-5 pt-15">About Me</h2>
            <div className="flex justify-center items-center mt-10 px-10">
            <p className="text-[#E5E7EB] text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl min-w-45">Hi, I’m Qozfa, a second-year Computer Science student at King’s 
                College London. I’m passionate about building impactful and user-friendly applications. 
                I’ve gained hands-on experience through internships at both a nonprofit and a startup, where I worked on web development and product
                  design. As a Web Developer Intern at GirlsWhoML, I redeveloped their website, improving 
                  performance and SEO. More recently, at Headstart, I collaborated with founders on platform 
                  enhancements and led community engagement initiatives. I also love experimenting with creative 
                  coding in p5.js, where I learn how to make generative art. I’m excited to continue growing as 
                  a developer and contribute to projects that combine technical depth with real-world impact.</p>
                  </div>
        </div>
    </section>
  ) 
}

export default About;

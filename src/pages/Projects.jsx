import React from 'react'
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Projects = () => {

  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/projects")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

  return (
    <section id="Projects" className="min-h-screen pb-20">
      <div className="px-10 py-15 mt-20">
      <h2 className="text-[#8B5CF6] dark:text-[#A78BFA] text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-sans font-bold mt-5 pt-5">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-20">
        {projects.map((p) => (
          <Link
          key={p._id}
          to={`/projects/${p.slug}`}
          className="bg-[#F9FAFB] dark:bg-[#1F2937] justify-center items-center rounded-2xl cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out m-5 flex flex-col p-4">
            <h2 className="text-[#8B5CF6] dark:text-[#A78BFA] text-center font-bold text-[20px]">
              {p.title}
              </h2>
              <p className="text-[#1F2937] dark:text-[#E5E7EB] text-center p-4">
              {p.shortDescription}
              </p>
              <div className="flex flex-row justify-center space-x-3 p-4 text-[#6B7280] dark:text-[#FFFFFF] text-[14px]">
              {p.techStack.map((tech, i) => (
                <p key={i}>{tech}</p>
              ))}
              </div>
              </Link>
        ))}
        </div>
        </div>
        </section>
        );
  };
        //       </div>
        //       </p>
        //     </h2>
        //   </Link>
        // ))}

//         <div className="bg-[#F9FAFB] dark:bg-[#1F2937] justify-center items-center rounded-2xl cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out m-5 flex flex-col">
//           <h2 className="text-[#8B5CF6] dark:text-[#A78BFA] text-center p-2 font-bold text-[20px]">Portfolio site</h2>
//           <p className="text-[#1F2937] dark:text-[#E5E7EB] text-center p-4">This full-stack portfolio site showcases my personal projects with interactive components and responsivity</p>
//           <div className="flex flex-row justify-center space-x-3 p-4 text-[#6B7280] dark:text-[#FFFFFF] text-[14px]">
//             <p>React</p>
//             <p>Tailwind</p>
//             <p>Supabase</p>
//           </div>
//         </div>

//         <div className="bg-[#F9FAFB] dark:bg-[#1F2937] justify-center items-center rounded-2xl cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out m-5 flex flex-col">
//           <h2 className="text-[#8B5CF6] dark:text-[#A78BFA] text-center p-2 font-bold text-[20px]">Air Pollution Visualizer</h2>
//           <p className="text-[#1F2937] dark:text-[#E5E7EB] text-center p-4">Interactive JavaFX app visualizing multi-year air quality data with API integration and dynamic charts. </p>
//           <div className="flex flex-row justify-center space-x-3 p-4 text-[#6B7280] dark:text-[#FFFFFF] text-[14px]">
//             <p>Java</p>
//             <p>JavaFX</p>
//             <p>API</p>
//           </div>
//         </div>

//         <div className="bg-[#F9FAFB] dark:bg-[#1F2937] justify-center items-center rounded-2xl cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out m-5 flex flex-col">
//           <h2 className="text-[#8B5CF6] dark:text-[#A78BFA] text-center p-2 font-bold text-[20px]">Cartpole Game Agent</h2>
//           <p className="text-[#1F2937] dark:text-[#E5E7EB] text-center p-4">A reinforcement learning agent built in PyTorch to solve CartPole-v1, demonstrating AI decision-making</p>
//           <div className="flex flex-row justify-center space-x-3 p-4 text-[#6B7280] dark:text-[#FFFFFF] text-[14px]">
//             <p>Python</p>
//             <p>PyTorch</p>
//             <p>Matplotlib</p>
//           </div>
//         </div>

        
//       </div>
//       </div>
//     </section>
//   )
// }

export default Projects;

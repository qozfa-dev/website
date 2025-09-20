import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProjectDetail = () => {
  const { slug } = useParams(); // gets the slug from the URL
  const [project, setProject] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/api/projects/${slug}`)
      .then((res) => res.json())
      .then((data) => setProject(data));
  }, [slug]);

  if (!project) return <p>Loading...</p>;

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold">{project.title}</h1>
      <p className="mt-4">{project.description}</p>
      <h3 className="mt-6 font-semibold">Tech Stack:</h3>
      <ul className="list-disc ml-6">
        {project.techStack.map((tech, i) => (
          <li key={i}>{tech}</li>
        ))}
      </ul>
      <div className="mt-6 space-x-4">
        <a
          href={project.githubLink}
          target="_blank"
          rel="noreferrer"
          className="text-blue-600 underline"
        >
          GitHub
        </a>
      </div>
    </div>
  );
};

export default ProjectDetail;
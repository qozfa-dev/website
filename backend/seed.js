import mongoose from "mongoose";
import dotenv from "dotenv";
import Project from "./models/Project.js";

dotenv.config();

const projects = [
  {
    title: "Portfolio Site",
    shortDescription: "This full-stack portfolio site showcases my personal projects with interactive components and responsivity",
    description: "This is my long description for my first project",
    techStack: ["React", "Tailwind", "Node"],
    githubLink: "https://github.com/qozfa-dev/website",
    slug: "portfolio-site",
  },
  {
    title: "Air Pollution Visualizer",
    shortDescription: "Interactive JavaFX app visualizing multi-year air quality data with API integration and dynamic charts.",
    description: "This is my long description for my second project",
    techStack: ["Java", "JavaFX", "API"],
    githubLink: "https://github.com/username/second-project",
    slug: "air-pollution-visualizer",
  },
  {
    title: "CartPole Game Agent",
    shortDescription: "A reinforcement learning agent built in PyTorch to solve CartPole-v1, demonstrating AI decision-making",
    description: "This is my long description for my third project",
    techStack: ["Python", "PyTorch", "Matplotlib"],
    githubLink: "https://github.com/qozfa-dev/cartpole-game-dqn-agent",
    slug: "third-project",
  },
];

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
    console.log("Connected to MongoDB...");
    await Project.deleteMany(); // clears old data
    await Project.insertMany(projects);
    console.log("Data seeded!");
    mongoose.connection.close();
  })
  .catch(err => console.error(err));

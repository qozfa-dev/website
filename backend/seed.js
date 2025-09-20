import mongoose from "mongoose";
import dotenv from "dotenv";
import Project from "./models/Project.js";

dotenv.config();

const projects = [
  {
    title: "My First Project",
    description: "This is my first project",
    techStack: ["React", "Tailwind", "Node"],
    githubLink: "https://github.com/username/my-first-project",
    slug: "my-first-project",
  },
  {
    title: "Second Project",
    description: "Another cool project",
    techStack: ["Next.js", "MongoDB"],
    githubLink: "https://github.com/username/second-project",
    slug: "second-project",
  },
  {
    title: "Third Project",
    description: "Yet another fun build",
    techStack: ["Express", "MongoDB", "React"],
    githubLink: "https://github.com/username/third-project",
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

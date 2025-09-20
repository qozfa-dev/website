import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
  title: String,
  shortDescription: String,
  description: String,
  techStack: [String],
  githubLink: String,
  slug: { type: String, unique: true },
});

export default mongoose.model("Project", projectSchema);
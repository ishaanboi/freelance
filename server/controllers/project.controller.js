const Project = require('../models/project');
const mongoose = require('mongoose')
exports.createProject = async (req, res) => {
  try {
    console.log("Incoming request body:", req.body); // ✅ log body
    const { title, description, budget, deadline } = req.body;
    const newProject = new Project({
      client: req.user.id,,
      title,
      description,
      budget,
      deadline
    });
    console.log("Saving project:", newProject); // ✅ log project
    await newProject.save();
    res.status(201).json(newProject);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.getAllProjects = async (req, res) => {
  try {
    const projects = await Project.find().populate('client', 'name email');
    res.json(projects);
  } catch (err) {
    console.error("Error in createProject:", err.message); // ✅ log error
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

const express = require('express');
const router = express.Router();
const projectController = require('../controllers/project.controller');
const { authenticate } = require('../middleware/auth.middleware');

// ✅ Only allow authenticated users to create projects
router.post('/', authenticate, projectController.createProject);

// 🔓 Allow anyone to view all projects
router.get('/', projectController.getAllProjects);

module.exports = router;

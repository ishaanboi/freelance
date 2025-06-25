const express = require('express');
const router = express.Router();
const projectController = require('../controllers/project.controller');
const { authenticate } = require('../middleware/auth.middleware');

router.post('/', projectController.createProject); // 🔓 No auth
router.get('/', projectController.getAllProjects); // 🔓 No auth

module.exports = router;

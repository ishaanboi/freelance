const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth.controller');

// Public Routes
router.post('/register', authController.register);
router.post('/login', authController.login);

// Protected Routes (Require Auth)
router.use(require('../middleware/auth.middleware')); // Apply middleware to protected routes

// Profile Routes
router.put('/profile/:id', authController.updateProfile);
router.get('/profile/:id', authController.getUserById);

module.exports = router;
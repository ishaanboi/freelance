const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth.controller');
const { authenticate } = require('../middleware/auth.middleware'); // ✅ this was missing

// Public Routes
router.post('/register', authController.register);
router.post('/login', authController.login);

// Protected Routes
router.use(authenticate); // ✅ applies auth middleware to all routes below

// Profile Routes
router.put('/profile/:id', authController.updateProfile);
router.get('/profile/:id', authController.getUserById);

module.exports = router;

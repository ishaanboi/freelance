const { authenticate, authorizeRole } = require('../middleware/auth.middleware');
const express = require('express');
const router = express.Router();
//const { authenticate } = require('../middleware/auth.middleware');
const bidController = require('../controllers/bid.controller');

// Freelancer places a bid
router.post('/', authenticate, authorizeRole('freelancer'), bidController.placeBid);

// View all bids for a project
router.get('/:projectId', bidController.getBidsForProject);

module.exports = router;

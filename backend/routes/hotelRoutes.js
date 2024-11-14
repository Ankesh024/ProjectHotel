const express = require('express');
const { getHotels } = require('../controllers/hotelsController');

const router = express.Router();

// Route to fetch and filter hotels
router.get('/', getHotels);

module.exports = router;

const express = require('express');
const dotenv = require('dotenv');
const hotelsRoutes = require('./routes/hotelRoutes');

dotenv.config();

const app = express();
app.use(express.json());

// Routes
app.use('/api/hotels', hotelsRoutes);

module.exports = app;

const express = require('express');
const cityRouter = express.Router();
const { getCities, addCity } = require('../controllers/cityController');

// Route to list all cities
cityRouter.get('/', getCities);

// Route to add a new city
cityRouter.post('/add-city', addCity);

module.exports = cityRouter;
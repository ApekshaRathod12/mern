const cityRouter = require('express').Router();
const City = require('../models/cityModel');

// GET / -> list cities
cityRouter.get('/', async (req, res) => {
	try {
		const cities = await City.find();
		res.json({
			data: cities,
			message: 'Cities fetched successfully',
		});
	} catch (error) {
		console.error('Error fetching cities:', error);
		res.status(500).json({ message: 'Server Error' });
	}
});

module.exports = cityRouter;
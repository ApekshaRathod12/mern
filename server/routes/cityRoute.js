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

// POST / -> add a new city
cityRouter.post('/add-city', async (req, res) => {
    console.log('req',req);
    
	try {
		let { id, cityName } = req.body;
		if (!id) {
			// Find the max id in the collection and increment
			const lastCity = await City.findOne().sort({ id: -1 });
			id = lastCity ? lastCity.id + 1 : 1;
		}
		const newCity = new City({ id, cityName });
		await newCity.save();
		res.status(201).json({ message: 'City added successfully', city: newCity });
	} catch (error) {
		console.error('Error adding city:', error);
		res.status(500).json({ message: 'Server Error' });
	}
});

module.exports = cityRouter;
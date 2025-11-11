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
	try {
		console.log(req.body);
		
		let { id, cityName } = req.body;

		if (!cityName) {
			return res.status(400).json({ message: 'cityName is required' });
		}

		if (id === undefined || id === null || isNaN(Number(id))) {
			const lastCity = await City.findOne().sort({ id: -1 });
			id = lastCity && typeof lastCity.id === 'number' ? lastCity.id + 1 : 1;
		} else {
			id = Number(id);
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
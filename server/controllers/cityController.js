const City = require('../models/cityModel');
const { v4: uuidv4 } = require('uuid');

// GET / -> list cities
const getCities = async (req, res) => {
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
};

// POST /add-city -> add a new city
const addCity = async (req, res) => {
	try {
		console.log(req.body);
		let { id, cityName } = req.body;

		if (!cityName) {
			return res.status(400).json({ message: 'cityName is required' });
		}

        if (!id){
            id = uuidv4();
        }

		const newCity = new City({ id, cityName });
		await newCity.save();

		res.status(201).json({ message: 'City added successfully', city: newCity });
	} catch (error) {
		console.error('Error adding city:', error);
		res.status(500).json({ message: 'Server Error' });
	}
};

module.exports = {
	getCities,
	addCity,
};
const Company = require("../models/companyModel");
const { v4: uuidv4 } = require('uuid');

const getCompanies = async (req,res) => {
    try {
        const companies = await Company.find();
        res.json({
            data: companies,
            message: 'Companies fetched successfully'
        });
    } catch (error) {
        console.error('Error fetching companies:',error);
        res.status(500).json({ message:'Server Error'});
    }
}

const addCompany = async (req, res) => {
  try {
    let { id, companyName } = req.body;

    if (!companyName) {
      return res.status(400).json({ message: 'Company name is required' });
    }

    if (!id) {
      id = uuidv4();
    }

    const newCompany = new Company({ id, companyName });
    await newCompany.save();

    res.status(201).json({ message: 'Company added successfully', company: newCompany });
  } catch (error) {
    console.error('Error adding company:', error);
    res.status(500).json({ message: 'Server Error' });
  }
};


module.exports = {
    getCompanies,
    addCompany
}
const express = require('express');
const { getCompanies, addCompany } = require('../controllers/companyController');
const companyRouter = express.Router();


companyRouter.get('/',getCompanies);
companyRouter.post('/add-company',addCompany);

module.exports = companyRouter;
const express = require('express');
const { getCompanies, addCompany, getCompaniesDropdownList } = require('../controllers/companyController');
const companyRouter = express.Router();


companyRouter.get('/',getCompanies);
companyRouter.post('/add-company',addCompany);
companyRouter.get('/companies-list',getCompaniesDropdownList);

module.exports = companyRouter;
const express = require('express');
const { getLeads, createLeads } = require('../controllers/leadController');
const leadsRouter = express.Router();


leadsRouter.get('/',getLeads);
leadsRouter.post('/add-lead',createLeads);

module.exports = leadsRouter;
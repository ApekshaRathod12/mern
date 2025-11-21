const Leads =  require('../models/leadsModel');
const { v4: uuidv4 } = require("uuid");

const createLeads = async (req , res) => {
    try {
        const lead = new Leads({
            ...req.body,
            createdBy: req.user_id
        });
        await lead.save();
        return res.status(201).json({ message : "Lead created successfully" , code : 201 , data: lead});
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Error creating lead"});
    }
}

const getLeads = async (req , res) => {
    try {
        const leads = await Leads.find();
    } catch (error) {
        res.status(500).json({ message: "Server error"});
    }
}
module.exports = {
  createLeads,
  getLeads,
};

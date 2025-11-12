const { default: mongoose } = require("mongoose");
const { v4: uuidv4 } = require("uuid");

const companySchema = new mongoose.Schema({
  id: {
    type: String, // ✅ Change from Number to String
    default: () => require("uuid").v4(), // Optional: auto-generate UUID
    unique: true,
  },
  companyName: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Company", companySchema, "company");

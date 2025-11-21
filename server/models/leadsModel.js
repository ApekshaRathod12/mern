const { default: mongoose } = require("mongoose");
const { v4: uuidv4 } = require("uuid");

const leadsSchema = mongoose.Schema({
  id: {
    type: String, // ✅ Change from Number to String
    default: () => require("uuid").v4(), // Optional: auto-generate UUID
    unique: true,
  },
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  companyId: { type: mongoose.Schema.Types.ObjectId, ref: "Company", required: true },
  subCompanyId: { type: mongoose.Schema.Types.ObjectId, ref: "SubCompany", required: true },
  productId: { type: mongoose.Schema.Types.ObjectId, ref:"Product", required: true },
  status: {type: String , enum : ["New" , "Contacted", "Qualified" , "Connected" , "Lost"], default: "New"},
  notes: { type: String },
  assignedTo: { type: mongoose.Schema.Types.ObjectId , ref: "User"}
});

module.exports = mongoose.model("Lead", leadsSchema, "leads");
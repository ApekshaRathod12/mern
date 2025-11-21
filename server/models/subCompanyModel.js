const { default: mongoose } = require("mongoose");
const { v4: uuidv4 } = require("uuid");

const subCompanySchema = mongoose.Schema({
    id:{ type: String , default: () => require("uuid").v4() , unique: true},
    subCompany: { type: String , required: true },
    companyId: { type: mongoose.Schema.Types.ObjectId , ref:"company",required: true}
})

module.exports = mongoose.model("SubCompany",subCompanySchema,"subcompany");
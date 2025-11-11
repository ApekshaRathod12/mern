const { default: mongoose } = require("mongoose");

const loginSchema = new mongoose.Schema({
    username: { type: String , required: true },
    password: { type: String , required: true },
    role: { type: String }
});

module.exports = mongoose.model("User",loginSchema,"user");
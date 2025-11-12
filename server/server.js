const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const cityRouter = require("./routes/cityRoute");
const loginRouter = require("./routes/loginRoute");
const companyRouter = require("./routes/companyRoute");

dotenv.config();

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000", // your React app
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

// ✅ connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

app.get("/", (req, res) => {
  res.send("API is running...");
});

// Mount city routes
app.use('/api',loginRouter);
app.use('/api/cities', cityRouter);
app.use('/api/companies',companyRouter);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});

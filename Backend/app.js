const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config(); // Load environment variables

const uploadRoutes = require("./routes/uploadRoutes"); // Import routes

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use("/images", uploadRoutes);

module.exports = app;

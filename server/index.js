require("dotenv").config();
const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const swapRoutes = require("./routes/swapRoutes");
const adminRoutes = require("./routes/adminRoutes");

connectDB();

const app = express();

// Middlewares
app.use(
  cors({
    origin: "http://localhost:5173", // frontend origin
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());

// Routes placeholder
app.get("/", (req, res) => {
  res.send("API is running...");
});

//All api routes
app.use("/api/auth", authRoutes);
app.use("/api/swaps", swapRoutes);
app.use("/api/admin", adminRoutes);

// Start server
const PORT = process.env.PORT || 7027;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

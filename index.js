const express = require("express");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const connectDB = require("./config/db");

const authRoutes = require("./routes/authRoutes");

dotenv.config();
connectDB();

const app = express();

// Middlewares
app.use(
  cors({
    origin: "http://localhost:5073", // frontend origin
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());

// Routes placeholder
app.get("/", (req, res) => {
  res.send("API is running...");
});

app.use("/api/auth", authRoutes);

// Start server
const PORT = process.env.PORT || 7027;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

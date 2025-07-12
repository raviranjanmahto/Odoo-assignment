const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

const protect = async (req, res, next) => {
  let token = req.cookies.jwt;

  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await User.findById(decoded.userId);
      next();
    } catch (err) {
      res.status(401).json({ message: "Not authorized, invalid token" });
    }
  } else {
    res.status(401).json({ message: "Not authorized, no token" });
  }
};

const adminOnly = (req, res, next) => {
  if (req.user && req.user.isAdmin) next();
  else res.status(403).json({ message: "Access denied" });
};

module.exports = { protect, adminOnly };

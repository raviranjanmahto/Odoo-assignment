const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

const protect = async (req, res, next) => {
  const token = req.cookies.jwt;

  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      const user = await User.findById(decoded.userId).select("-password");

      if (!user || user.isBanned) {
        return res
          .status(403)
          .json({ message: "Access denied or user banned" });
      }

      req.user = user;
      next();
    } catch (error) {
      res.status(401).json({ message: "Not authorized, token invalid" });
    }
  } else {
    res.status(401).json({ message: "Not authorized, no token" });
  }
};

const adminOnly = (req, res, next) => {
  if (req.user && req.user.isAdmin) next();
  else res.status(403).json({ message: "Admin access required" });
};

module.exports = { protect, adminOnly };

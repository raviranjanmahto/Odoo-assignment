const User = require("../models/userModel");
const generateToken = require("../utils/generateToken");

// @desc Register user
exports.registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  const userExists = await User.findOne({ email });
  if (userExists)
    return res.status(400).json({ message: "Email already exists" });

  const user = await User.create({ name, email, password });

  generateToken(res, user._id);
  res.status(201).json({ _id: user._id, name: user.name, email: user.email });
};

// @desc Login user
exports.loginUser = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user || !(await user.matchPassword(password))) {
    return res.status(401).json({ message: "Invalid email or password" });
  }

  generateToken(res, user._id);
  res.json({ _id: user._id, name: user.name, email: user.email });
};

// @desc Logout user
exports.logoutUser = async (req, res) => {
  res.clearCookie("token");
  res.status(200).json({ message: "Logged out successfully" });
};

// @desc Get current user
exports.getCurrentUser = async (req, res) => {
  const user = await User.findById(req.user._id);
  res.json(user);
};

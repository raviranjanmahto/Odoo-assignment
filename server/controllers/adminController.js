const User = require("../models/userModel");
const Swap = require("../models/swapModel");

// @desc Get all users (with basic info)
exports.getAllUsers = async (req, res) => {
  const users = await User.find().select("-password");
  res.json(users);
};

// @desc Ban or unban a user
exports.toggleBanUser = async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) return res.status(404).json({ message: "User not found" });

  if (user.isAdmin)
    return res.status(400).json({ message: "Cannot ban an admin" });

  user.isBanned = !user.isBanned;
  await user.save();

  res.json({ message: `User ${user.isBanned ? "banned" : "unbanned"}` });
};

// @desc Get all swap stats (admin view)
exports.getAllSwaps = async (req, res) => {
  const swaps = await Swap.find()
    .populate("requester", "name email")
    .populate("recipient", "name email")
    .sort({ createdAt: -1 });

  res.json(swaps);
};

// @desc Delete a swap (admin-level moderation)
exports.adminDeleteSwap = async (req, res) => {
  const swap = await Swap.findById(req.params.id);
  if (!swap) return res.status(404).json({ message: "Swap not found" });

  await swap.remove();
  res.json({ message: "Swap deleted by admin" });
};

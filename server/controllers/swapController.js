const Swap = require("../models/swapModel");
const User = require("../models/userModel");

// @desc Create a swap request
exports.requestSwap = async (req, res) => {
  const { recipientId, skillRequested, skillOffered } = req.body;

  if (recipientId === req.user._id.toString()) {
    return res
      .status(400)
      .json({ message: "You cannot request a swap with yourself." });
  }

  const recipient = await User.findById(recipientId);
  if (!recipient || !recipient.isPublic) {
    return res
      .status(404)
      .json({ message: "Recipient not found or not public" });
  }

  const swap = await Swap.create({
    requester: req.user._id,
    recipient: recipientId,
    skillRequested,
    skillOffered,
  });

  res.status(201).json(swap);
};

// @desc Get all swap requests related to current user
exports.getSwaps = async (req, res) => {
  const swaps = await Swap.find({
    $or: [{ requester: req.user._id }, { recipient: req.user._id }],
  })
    .populate("requester", "name email profileImage")
    .populate("recipient", "name email profileImage")
    .sort({ createdAt: -1 });

  res.json(swaps);
};

// @desc Accept swap
exports.acceptSwap = async (req, res) => {
  const swap = await Swap.findById(req.params.id);
  if (!swap || swap.recipient.toString() !== req.user._id.toString()) {
    return res.status(403).json({ message: "Unauthorized or swap not found" });
  }

  swap.status = "accepted";
  await swap.save();
  res.json({ message: "Swap accepted" });
};

// @desc Reject swap
exports.rejectSwap = async (req, res) => {
  const swap = await Swap.findById(req.params.id);
  if (!swap || swap.recipient.toString() !== req.user._id.toString()) {
    return res.status(403).json({ message: "Unauthorized or swap not found" });
  }

  swap.status = "rejected";
  await swap.save();
  res.json({ message: "Swap rejected" });
};

// @desc Cancel swap (by requester only)
exports.cancelSwap = async (req, res) => {
  const swap = await Swap.findById(req.params.id);
  if (!swap || swap.requester.toString() !== req.user._id.toString()) {
    return res.status(403).json({ message: "Unauthorized or swap not found" });
  }

  swap.status = "cancelled";
  await swap.save();
  res.json({ message: "Swap cancelled" });
};

// @desc Delete a pending swap (by requester before acceptance)
exports.deleteSwap = async (req, res) => {
  const swap = await Swap.findById(req.params.id);
  if (!swap || swap.requester.toString() !== req.user._id.toString()) {
    return res.status(403).json({ message: "Unauthorized or swap not found" });
  }

  if (swap.status !== "pending") {
    return res
      .status(400)
      .json({ message: "Only pending swaps can be deleted" });
  }

  await swap.remove();
  res.json({ message: "Swap deleted" });
};

// @desc Leave feedback (after accepted swap)
exports.leaveFeedback = async (req, res) => {
  const swap = await Swap.findById(req.params.id);

  if (!swap || swap.status !== "accepted") {
    return res
      .status(400)
      .json({ message: "Invalid swap or status not accepted" });
  }

  if (
    swap.requester.toString() !== req.user._id.toString() &&
    swap.recipient.toString() !== req.user._id.toString()
  ) {
    return res.status(403).json({ message: "You were not part of this swap" });
  }

  swap.feedback = {
    rating: req.body.rating,
    comment: req.body.comment,
  };

  await swap.save();
  res.json({ message: "Feedback submitted" });
};

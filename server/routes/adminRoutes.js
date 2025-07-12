const express = require("express");
const {
  getAllUsers,
  toggleBanUser,
  getAllSwaps,
  adminDeleteSwap,
} = require("../controllers/adminController");
const { protect, adminOnly } = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/users", protect, adminOnly, getAllUsers);
router.put("/users/:id/ban", protect, adminOnly, toggleBanUser);
router.get("/swaps", protect, adminOnly, getAllSwaps);
router.delete("/swaps/:id", protect, adminOnly, adminDeleteSwap);

module.exports = router;

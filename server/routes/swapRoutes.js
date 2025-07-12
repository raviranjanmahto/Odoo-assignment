const express = require("express");
const {
  requestSwap,
  getSwaps,
  acceptSwap,
  rejectSwap,
  cancelSwap,
  deleteSwap,
  leaveFeedback,
} = require("../controllers/swapController");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/", protect, requestSwap);
router.get("/", protect, getSwaps);
router.put("/:id/accept", protect, acceptSwap);
router.put("/:id/reject", protect, rejectSwap);
router.put("/:id/cancel", protect, cancelSwap);
router.delete("/:id", protect, deleteSwap);
router.post("/:id/feedback", protect, leaveFeedback);

module.exports = router;

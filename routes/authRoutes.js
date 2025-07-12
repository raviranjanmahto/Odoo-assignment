const router = require("express").Router();
const {
  registerUser,
  loginUser,
  logoutUser,
  getCurrentUser,
} = require("../controllers/authController");
const { protect } = require("../middleware/authMiddleware");

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/logout", logoutUser);
router.get("/me", protect, getCurrentUser);

module.exports = router;

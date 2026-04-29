const express = require("express");
const router = express.Router();

const { signup, login, updateProfile, getProfile } = require("../controller/authController");
const authMiddleware = require("../middleware/authMiddleware");

// auth routes
router.post("/signup", signup);
router.post("/login", login);


router.put("/update", authMiddleware, updateProfile);
router.get("/profile", authMiddleware, getProfile);

module.exports = router;
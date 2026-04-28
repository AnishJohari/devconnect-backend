const express = require("express");
const router = express.Router();
const auth = require("../middleware/authMiddleware");

const {
  createPost,
  getPosts,
  updatePost,
  deletePost,
} = require("../controller/postController");

router.post("/", auth, createPost);
router.get("/", getPosts);
router.put("/:id", auth, updatePost);
router.delete("/:id", auth, deletePost);

module.exports = router;
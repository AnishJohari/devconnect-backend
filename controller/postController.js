const Post = require("../model/post");

// Create Post
exports.createPost = async (req, res) => {
  const post = await Post.create({
    title: req.body.title,
    content: req.body.content,
    user: req.user.id,
  });

  res.json(post);
};

// Get All Posts
exports.getPosts = async (req, res) => {
  const posts = await Post.find().populate("user", "name email");
  res.json(posts);
};

// Update Post
exports.updatePost = async (req, res) => {
  const post = await Post.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.json(post);
};

// Delete Post
exports.deletePost = async (req, res) => {
  await Post.findByIdAndDelete(req.params.id);
  res.json({ message: "Post deleted" });
};
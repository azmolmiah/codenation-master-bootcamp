const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
});

const Post = mongoose.model("POST", postSchema);

module.exports = Post;
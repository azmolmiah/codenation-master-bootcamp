const Post = require("./model");

exports.addPost = async (req, res) => {
  try {
    const newPost = await Post.create(req.body);
    res.send({ post: newPost });
  } catch (error) {
    console.log(error);
    res.send({ error });
  }
};

exports.posts = async (req, res) => {
  try {
    const posts = await Post.find({ username: req.params.username });
    res.send({ posts });
  } catch (error) {
    console.log(error);
    res.send({ error });
  }
};

exports.updatePost = async (req, res) => {
  try {
    const updatePost = await Post.findByIdAndUpdate(req.params.id, {
      $set: req.body,
    });
    res.send({ updatedPost: updatePost });
  } catch (error) {
    console.log(error);
    res.send({ error });
  }
};

exports.deletePost = async (req, res) => {
  try {
    const deletePost = await Post.findByIdAndDelete(req.params.id);
    res.send({ deletePost });
  } catch (error) {
    console.log(error);
    res.send({ error });
  }
};

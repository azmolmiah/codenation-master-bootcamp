const jwt = require("jsonwebtoken");
const User = require("./model");

exports.signUp = async (req, res) => {
  try {
    const newUser = await User.create(req.body); //req.body is an object contains k/v pairs that match the user model
    const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET); //Sign method creates a token with object payload hidden in it.
    console.log(token);
    res.send({ user: newUser, token });
    if (newUser.verification) {
      await User.findByIdAndUpdate(newUser.id, { $set: { verified: true } });
    }
  } catch (error) {
    console.log(error);
    res.send({ error });
  }
};

exports.users = async (req, res) => {
  try {
    const users = await User.find();
    res.send({ users });
  } catch (error) {
    console.log(error);
    res.send({ error });
  }
};

exports.user = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.send({ user });
  } catch (error) {
    console.log(error);
    res.send({ error });
  }
};

exports.login = async (req, res) => {
  try {
    console.log("In login" + req.user);
    res.send({ user: req.user });
  } catch (error) {
    console.log(error);
    res.send({ error });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const updateUser = await User.findByIdAndUpdate(req.params.id, {
      $set: req.body,
    });
    res.send({ user: updateUser });
  } catch (error) {
    console.log(error);
    res.send({ error });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const deleteUser = await User.findByIdAndDelete(req.params.id);
    res.send({ user: deleteUser });
  } catch (error) {
    console.log(error);
    res.send({ error });
  }
};

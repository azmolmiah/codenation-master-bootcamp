const User = require("./model");

exports.signUp = async (req, res) => {
  try {
    const newUser = await User.create(req.body); //req.body is an object contains k/v pairs that match the user model
    res.send({ user: newUser });
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

exports.login = async (req, res) => {
  try {
    res.send({ user: req.user });
  } catch (error) {
    console.log(error);
    res.send({ error });
  }
};

exports.resetUsernameEmailAndPassword = async (req, res) => {
  try {
    const updateUser = await User.findByIdAndUpdate(
      { _id: req.params.id },
      { $set: req.body }
    );
    res.send({ user: updateUser });
  } catch (error) {
    console.log(error);
    res.send({ error });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const deleteUser = await User.findByIdAndDelete({ _id: req.params.id });
    res.send({ user: deleteUser });
  } catch (error) {
    console.log(error);
    res.send({ error });
  }
};

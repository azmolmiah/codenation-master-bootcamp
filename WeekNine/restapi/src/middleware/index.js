const User = require("../user/model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.hashPassword = async (req, res, next) => {
  try {
    // const tempPass = req.body.password; //Granned password variable from body and stored it locally
    // const hashedPass = await bcrypt.hash(tempPass, 8); //Hashed the password and stored it in a new constant
    // req.body.password = hashedPass; //stores freshly hased password back in the req body
    req.body.password = await bcrypt.hash(req.body.password, 8);
    next(); //Moves onto next middleware/controller in endpoint
  } catch (error) {
    console.log(error);
    res.send({ error });
  }
};

exports.validatePassword = async (req, res, next) => {
  try {
    req.user = await User.findOne({
      username: req.body.username,
    });
    console.log(req.user);
    if (await bcrypt.compare(req.body.password, req.user.password)) {
      next();
    } else {
      throw new Error("Please enter a valid username and password");
    }
  } catch (error) {
    console.log(error);
    res.send({ error });
  }
};

exports.validateEmail = async (req, res, next) => {
  try {
    if (
      req.body.email.match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
    ) {
      next();
    } else {
      throw new Error("Please enter a valid email address");
    }
  } catch (error) {
    console.log(error);
    res.send({ error });
  }
};

exports.validateToken = async (req, res, next) => {
  try {
    const decodedToken = jwt.verify(
      req.header("Authorization"),
      process.env.JWT_SECRET
    ); //Decode token using same secret that created the token
    req.user = await User.findById(decodedToken.id);
    if (req.user) {
      next();
    } else {
      throw new Error("Please use a valid token");
    }
  } catch (error) {
    console.log(error);
    res.send({ error });
  }
};

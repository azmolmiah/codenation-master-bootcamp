const { Router } = require("express"); //import router method only from express
const {
  signUp,
  login,
  users,
  user,
  updateUser,
  deleteUser,
} = require("./controllers"); //import only signup from controllers
const {
  hashPassword,
  validatePassword,
  validateEmail,
  validateToken,
} = require("../middleware");
const userRouter = Router(); //create a router that can have endpoints added to it

// ROUTES.........
userRouter.post("/user", validateEmail, hashPassword, signUp); //Defining a post request on /user path that calls the signup controller
userRouter.post("/login", validatePassword, login); //Defining a post request on /login path, calls the login controller
userRouter.get("/login", validateToken, login);
userRouter.get("/users", users);
userRouter.get("/user/:id", user);
userRouter.put("/user/:id", validateEmail, hashPassword, updateUser);
userRouter.delete("/user/:id", deleteUser);

module.exports = userRouter;

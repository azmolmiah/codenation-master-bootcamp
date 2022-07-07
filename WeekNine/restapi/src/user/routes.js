const { Router } = require("express"); //import router method only from express
const {
  signUp,
  login,
  users,
  resetUsernameEmailAndPassword,
  deleteUser,
} = require("./controllers"); //import only signup from controllers
const {
  hashPassword,
  validatePassword,
  validateEmail,
} = require("../middleware");
const userRouter = Router(); //create a router that can have endpoints added to it

// ROUTES.........
userRouter.post("/user", validateEmail, hashPassword, signUp); //Defining a post request on /user path that calls the signup controller
userRouter.get("/users", users);
userRouter.post("/login", validatePassword, login); //Defining a post request on /login path, calls the login controller
userRouter.put(
  "/user/:id",
  validateEmail,
  hashPassword,
  resetUsernameEmailAndPassword
);
userRouter.delete("/user/:id", deleteUser);

module.exports = userRouter;

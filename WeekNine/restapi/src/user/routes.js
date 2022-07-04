const { Router } = require("express"); //import router method only from express
const { signUp } = require("./controllers"); //import only signup from controllers
const userRouter = Router(); //create a router that can have endpoints added to it

userRouter.post("/user", signUp); //Defining a post request on /user path that calls the signup controller

module.exports = userRouter;

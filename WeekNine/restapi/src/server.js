require("./db/connection"); // Instantly run database connection
const express = require("express"); //Pull in express module
const userRouter = require("./user/routes"); //Bring in all endpoints connected to user router
const app = express(); // Creat web server constant to manipulate
const port = process.env.PORT || 5001; //Store either supllied port or port 5001

app.use(express.json()); // Parses all requests as if they ar JSON, sends all responses as JSON

app.use(userRouter);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

//Listening on port 5001 or provided port on current location (localhost)

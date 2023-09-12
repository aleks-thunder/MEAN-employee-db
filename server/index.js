const express = require("express");
const bodyParses = require("body-parser");

const connectDb = require("./db");
const employeeRouter = require("./controllers/employee.controller");
const { errorHandler } = require("./middlewares");

const app = express();

//middleware
app.use(bodyParses.json());
app.use("/api/employees", employeeRouter);
app.use(errorHandler);

connectDb()
  .then(() => {
    console.log("Database connected");
    app.listen(3000, () => console.log("Server started at 3000"));
  })
  .catch((error) => console.log(error));

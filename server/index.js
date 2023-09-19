const express = require("express");
const bodyParses = require("body-parser");
const cors = require("cors");

const connectDb = require("./db");
const employeeRouter = require("./controllers/employee.controller");
const { errorHandler } = require("./middlewares");

const app = express();

app.use(bodyParses.json());
app.use(cors({ origin: "http://localhost:4200" }));
app.use("/api/employees", employeeRouter);
app.use(errorHandler);

connectDb()
  .then(() => {
    console.log("Database connected");
    app.listen(3000, () => console.log("Server started at 3000"));
  })
  .catch((error) => console.log(error));

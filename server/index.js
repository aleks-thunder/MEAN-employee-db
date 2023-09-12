const express = require("express");
const bodyParses = require("body-parser");

const connectDb = require("./db.js");

const app = express();

//middleware
app.use(bodyParses.json());

connectDb()
  .then(() => {
    console.log("Database connected");
    app.listen(3000, () => console.log("Server started"));
  })
  .catch((error) => console.log(error));

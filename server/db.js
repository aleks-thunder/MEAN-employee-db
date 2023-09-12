const mongoose = require("mongoose");

const dbUri =
  "mongodb+srv://aleksthunderm:employee-api@employee-cluster.yluxk7o.mongodb.net/employee_db";

mongoose.set("strictQuery", false);

module.exports = () => {
  return mongoose.connect(dbUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();
const watchesRoute = require("./routes/watches.js");

app.use(express.json());
app.use((req, res, next) => {
  console.log("middleware");
  next();
});
app.use("/api/watches", watchesRoute);

// connect to mongodb
mongoose
  .connect(process.env.MongoUrl)
  .then(() => {
    console.log("connected to the database");
  })
  .catch((error) => {
    console.log(error);
  });
app.listen(7000, () => {
  console.log("the app is running on port 7000");
});

const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();
const watchesRoute = require("./routes/watches.js");
const userRoute = require("./routes/auth.js");
const cors = require("cors");

app.use((req, res, next) => {
  res.setHeader(
    "Access-Control-Allow-Origin",
    "backend-tnlk.onrender.com/api/watches/ , http://localhost:7000/  "
  );
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, Patch, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.use(cors());

app.use(express.json());
app.use((req, res, next) => {
  console.log("middleware");
  next();
});
app.use("/api/watches", watchesRoute);
app.use("/api/", userRoute);

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

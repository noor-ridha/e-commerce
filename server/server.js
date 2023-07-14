const express = require("express");
const app = express();
const watchesRoute = require("./routes/watches.js");

app.use((req, res, next) => {
  console.log("middleware");
  next();
});
app.use("/api/watches", watchesRoute);

app.listen(7000, () => {
  console.log("the app is running on port 7000");
});

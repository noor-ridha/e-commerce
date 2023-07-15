const express = require("express");
const router = express.Router();
const {
  createDoc,
  getWatch,
  getSigleWatch,
} = require("../controllers/watchController");

const wateches = require("../ models/watchModel");
// get all watches
router.get("/", getWatch);
// get single watch
router.get("/:id", getSigleWatch);

// create a product route
router.post("/", createDoc);

// update route
router.patch("/:id", (req, res) => {
  res.json({ message: "edit" });
});
router.delete("/:id", (req, res) => {
  res.json({ message: "delete" });
});
module.exports = router;

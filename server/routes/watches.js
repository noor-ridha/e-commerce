const express = require("express");
const router = express.Router();
const {
  createDoc,
  getWatch,
  getSigleWatch,
  deleteDoc,
  updateDoc,
} = require("../controllers/watchController");

const wateches = require("../ models/watchModel");
// get all watches
router.get("/", getWatch);
// get single watch
router.get("/:id", getSigleWatch);

// create a product route
router.post("/", createDoc);

// update route
router.patch("/:id", updateDoc);
router.delete("/:id", deleteDoc);
module.exports = router;

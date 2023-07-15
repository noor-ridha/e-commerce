const express = require("express");
const router = express.Router();
const wateches = require("../ models/watchModel");
// get all watches
router.get("/", (req, res) => {
  res.json({ message: " get all watches route" });
});
// get single watch
router.get("/:id", (req, res) => {
  res.json({ message: "single watch " });
});

// create a product
router.post("/", async (req, res) => {
  const { title, picture, price, gender, color, description, brand } = req.body;
  try {
    const watch = await wateches.create({
      title,
      picture,
      price,
      gender,
      color,
      description,
      brand,
    });
    res.status(200).json(watch);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
  // res.json({ message: "hello from post route" });
});
router.patch("/:id", (req, res) => {
  res.json({ message: "edit" });
});
router.delete("/:id", (req, res) => {
  res.json({ message: "delete" });
});
module.exports = router;

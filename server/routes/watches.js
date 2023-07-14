const express = require("express");
const router = express.Router();

// get all watches
router.get("/", (req, res) => {
  res.json({ message: " get all watches route" });
});
// get single watch
router.get("/:id", (req, res) => {
  res.json({ message: "single watch " });
});

router.post("/", (req, res) => {
  res.json({ message: "hello from post route" });
});
router.patch("/:id", (req, res) => {
  res.json({ message: "edit" });
});
router.delete("/:id", (req, res) => {
  res.json({ message: "delete" });
});
module.exports = router;

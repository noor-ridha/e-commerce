const express = require("express");
const router = express.Router();

const { signUp } = require("../controllers/authController");
const users = require("../ models/User");

router.post("/signup", signUp);

module.exports = router;

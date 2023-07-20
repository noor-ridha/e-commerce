const mongoose = require("mongoose");
const validator = require("validator");
const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter your name"],
  },

  email: {
    type: String,
    required: [true, "Please enter your E-mail"],
    unique: true,
    validate: [validator.isEmail, "enter correct E-mail"],
  },
  password: {
    type: String,
    required: [true, "Please enter your Password"],
    minLength: 8,
  },
  passwordConfirm: {
    type: String,
    required: [true, "Please Re-enter your Password"],
    unique: true,
  },
  photo: {
    type: String,
  },
});
module.exports = mongoose.model("users,userSchema ");

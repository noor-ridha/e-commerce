const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");

// creating users
const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter your name"],
  },

  email: {
    type: String,
    required: [true, "Please enter your E-mail"],
    unique: true,
    validate: [validator.isEmail, "enter a valid E-mail"],
  },
  password: {
    type: String,
    required: [true, "Please enter your Password"],
    minLength: 8,
  },
  passwordConfirm: {
    type: String,
    required: [true, "Please Re-enter your Password"],
    validate: {
      validator: function (pass) {
        return pass === this.password;
      },
      message: "Passwords are not matched",
    },
  },
  photo: {
    type: String,
  },
});

// hashing passwords in db
userSchema.pre("save", async function (next) {
  // run the code only if the password in not modified, if the user changed the email there's no need to re-encrypt the password
  if (!this.isModified("password")) return next();
  // Salt length (12) to generate or salt to use Asynchronously generates a hash for the given string.
  // hash password with cost of 12
  this.password = await bcrypt.hash(this.password, 12);
  // we do not need to send the password confirmation to the db
  this.passwordConfirm = undefined;
  next();
});

module.exports = mongoose.model("users", userSchema);

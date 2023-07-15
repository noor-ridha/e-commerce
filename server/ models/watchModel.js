const mongoose = require("mongoose");
const watchSchema = mongoose.Schema({
  title: {
    type: String,
    required: [true, "enter the title"],
  },
  brand: {
    type: String,
    required: [true, "enter the brand"],
  },
  description: {
    type: String,
    required: [true, "enter the description"],
  },
  color: {
    type: String,
    required: [true, "enter the color"],
  },
  gender: {
    type: String,
    required: [true, "enter the grnder"],
  },
  price: {
    type: Number,
    required: [true, "enter the price"],
  },

  picture: {
    type: String,
    required: [true, "enter the picture"],
  },
});
module.exports = mongoose.model("watches", watchSchema);

const mongoose = require("mongoose");

var libroSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  author: {
    type: String,
  },
  pages: {
    type: Number,
  },
  price: {
    type: Number,
  },
});

mongoose.model("libroModel", libroSchema);

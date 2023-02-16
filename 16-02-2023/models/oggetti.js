const mongoose = require("mongoose");

let oggettoSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  price: {
    type: String,
  },
});

mongoose.model("oggettiModel", oggettoSchema);

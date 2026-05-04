const mongoose = require("mongoose");

const placeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true   // Hotel, Mall, Restaurant
  },
  phone: {
    type: String
  },
  description: {
    type: String
  }
});

const Place = mongoose.model("Place", placeSchema);

module.exports = Place;

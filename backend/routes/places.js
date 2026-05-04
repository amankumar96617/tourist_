const express = require("express");
const router = express.Router();
const Place = require("../models/Place");

// GET data from MongoDB (NOT dummy)
router.get("/", async (req, res) => {
  try {
    const places = await Place.find();
    res.json(places);
  } catch (error) {
    res.status(500).json({ message: "Database error" });
  }
});

module.exports = router;

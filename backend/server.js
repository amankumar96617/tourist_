const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

/* MIDDLEWARE */
app.use(cors());
app.use(express.json());

/* ROUTES */
const placeRoutes = require("./routes/places");
app.use("/api/places", placeRoutes);

/* MONGODB CONNECTION */
mongoose.connect("mongodb://127.0.0.1:27017/tourismDB")
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

/* SERVER START */
const PORT = 5001;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});


const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const authRoutes = require("./routes/authRoutes");
const billRoutes = require("./routes/billRoutes");
require("dotenv").config();
const authMiddleware = require("./middleware/authMiddleware");

const app = express();   // <-- Move this UP



app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/bills", billRoutes);


app.get("/api/profile", authMiddleware, (req, res) => {
  res.json({
    message: "Protected route accessed successfully",
    user: req.user,
  });
});

// DEBUG LINE (important)
console.log("Auth routes loaded");

// ROUTES
app.use("/api/auth", authRoutes);
// TEST ROUTE (very important for debugging)
app.get("/", (req, res) => {
  res.send("Server is working");
});

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected Successfully ✅");
  })
  .catch((err) => {
    console.log("MongoDB Error:", err);
  });

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
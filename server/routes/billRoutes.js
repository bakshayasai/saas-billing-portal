const express = require("express");
const router = express.Router();

const Bill = require("../models/Bill");
const authMiddleware = require("../middleware/authMiddleware");
const adminMiddleware = require("../middleware/adminMiddleware");

// CREATE BILL (ADMIN ONLY)
router.post(
  "/create",
  authMiddleware,
  adminMiddleware,
  async (req, res) => {
    try {
        console.log(req.body);
      const { customerName, amount, status } = req.body;

      const bill = new Bill({
        customerName,
        amount,
        status,
        createdBy: req.user.id,
      });

      await bill.save();

      res.status(201).json({
        message: "Bill created successfully",
        bill,
      });
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  }
);
// VIEW ALL BILLS
router.get(
  "/all",
  authMiddleware,
  async (req, res) => {
    try {
      const bills = await Bill.find();

      res.status(200).json(bills);
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  }
);
module.exports = router;
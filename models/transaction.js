const mongoose = require("mongoose");

const trackerSchema = new mongoose.Schema({
  text: {
    type: String,
    trim: true,
    required: [true, "please add some text"],
  },

  amount: {
    type: Number,
    trim: true,
    required: [true, "please provide a number"],
  },
  time: { type: Date, default: Date.now },
});

const Transaction = mongoose.model("expense", trackerSchema);

module.exports = Transaction;

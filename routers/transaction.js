const express = require("express");
const Transaction = require("../models/transaction");

const router = express.Router();

router.get("/", async (req, res) => {
  const all = await Transaction.find({});
  try {
    if (all.length === 0) {
      throw new Error();
    }
    res.send(all);
  } catch (error) {
    res.status(404).send("there is nothing here");
  }
});

router.post("/", async (req, res) => {
  try {
    const transaction = new Transaction(req.body);

    await transaction.save();
    res.send(transaction);
  } catch (error) {
    if (error.name === "ValidationError") {
      const messages = Object.values(error.errors).map((val) => val.message);
      res.send(messages);
    }
    res.status(400).send();
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const transaction = await Transaction.findById(req.params.id);
    if (!transaction) {
      res.status(404).send("user not found");
    }
    await transaction.remove();
    res.send(transaction);
  } catch (error) {
    res.status(400).send();
  }
});

module.exports = router;

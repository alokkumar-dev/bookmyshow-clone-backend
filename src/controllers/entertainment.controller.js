const express = require("express");

const Entertainments = require("../models/entertainment.model");
const router = express.Router();
router.get("", async (req, res) => {
    try {
      const entertainments = await Entertainments.find()
        .lean()
        .exec();
      return res.send(entertainments);
    } catch (err) {
      return res.status(500).send({ message: err.message });
    }
  });

  module.exports = router;
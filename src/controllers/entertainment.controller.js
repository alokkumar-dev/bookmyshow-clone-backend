const express = require("express");

const Entertainment = require("../models/entertainment.model");
const router = express.Router();
router.get("", async (req, res) => {
    try {
      const entertainment = await Entertainment.find()
        .lean()
        .exec();
      return res.send(entertainment);
    } catch (err) {
      return res.status(500).send({ message: err.message });
    }
  });

  module.exports = router;
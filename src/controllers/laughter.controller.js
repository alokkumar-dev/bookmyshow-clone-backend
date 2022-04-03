const express = require("express");

const Laughter = require("../models/laughter.model");
const router = express.Router();
router.get("", async (req, res) => {
    try {
     
  
      const laughter = await Laughter.find()
        .lean()
        .exec();
      return res.send(laughter);
    } catch (err) {
      return res.status(500).send({ message: err.message });
    }
  });

  module.exports = router;
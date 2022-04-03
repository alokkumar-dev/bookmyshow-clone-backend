const express = require("express");

const Premiere = require("../models/premiere.model");
const router = express.Router();
router.get("", async (req, res) => {
    try {
     
  
      const premiere = await Premiere.find()
        .lean()
        .exec();
      return res.send(premiere);
    } catch (err) {
      return res.status(500).send({ message: err.message });
    }
  });

  module.exports = router;
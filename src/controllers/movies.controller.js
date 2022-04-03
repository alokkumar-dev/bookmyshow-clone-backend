const express = require("express");

const Movies = require("../models/movies.model");
const router = express.Router();
router.get("", async (req, res) => {
    try {
     
  
      const movie = await Movies.find()
        .lean()
        .exec();
      return res.send(movie);
    } catch (err) {
      return res.status(500).send({ message: err.message });
    }
  });
  router.get("/:id", async (req, res) => {
    try {
     
      
  
      const movie = await Movies.findById(req.params.id)
        .lean()
        .exec();
      return res.send(movie);
    } catch (err) {
      return res.status(500).send({ message: err.message });
    }
  });

  module.exports = router;
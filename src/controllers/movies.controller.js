const express = require("express");

const Movies = require("../models/movies.model");
const router = express.Router();

  router.get("/:id", async (req, res) => {
    try {
     
      if(req.params.id){
        const movie = await Movies.findById(req.params.id)
        .lean()
        .exec();
      return res.send(movie);
      }else{
        const movie = await Movies.find()
        .lean()
        .exec();
      return res.send(movie);
      }
  
      
    } catch (err) {
      return res.status(500).send({ message: err.message });
    }
  });

  module.exports = router;
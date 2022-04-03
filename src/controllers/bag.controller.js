const express = require("express");

const Bag = require("../models/bag.model");

const authenticate = require("../middlewares/authenticate");
const authorise = require("../middlewares/authorise");

const router = express.Router();

router.post("", async (req, res) => {
  console.log(req.body);
    
  try {
    // console.log(req.user, req.user._id);
    // console.log(req.headers);
    //  const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
    //    new: true,
    //  });
    
    const bag = await Bag.create(
      
        req.body
      
      // {
      //   new: true,
      // }
    );

    return res.send(bag);
  } catch (err) {
    console.log(err);
    return res.status(500).send({ message: err.message });
  }
});

// router.get("/:id", async (req, res) => {
//   try {
//     console.log(req.params.id);

//     const bag = await Bag.find({ user_id: { $eq: req.params.id } })
//       .lean()
//       .exec();
//     console.log(bag);
//     return res.send(bag);
//   } catch (err) {
//     return res.status(500).send({ message: err.message });
//   }
// });

router.get("/:id", async (req, res) => {
  try {
    console.log(req.params.id);

    const bag = await Bag.find({ user_id: { $eq: req.user._id } })
      .lean()
      .exec();
    console.log(bag);
    return res.send(bag);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    console.log(req.params.id);

    const bag = await Bag.findByIdAndDelete(req.params.id).lean().exec();
    console.log(bag);
    return res.send(bag);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

module.exports = router;

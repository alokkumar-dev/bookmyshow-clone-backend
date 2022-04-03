const express = require("express");

const Bag = require("../models/bag.model");

const authenticate = require("../middlewares/authenticate");
const authorise = require("../middlewares/authorise");

const router = express.Router();

router.post("", async (req, res) => {
  try {
    // console.log(req.user, req.user._id);
    // console.log(req.headers);
    //  const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
    //    new: true,
    //  });
    console.log(req.body);
    // const user_id = req.user._id;
    const bag = await Bag.create(
      {
        userid: {type:String,required:true},
        title: {type:String,required:true},
        img:{type:String,required:true},
        amount:{type:String,required:true}
      }
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

router.get("", authenticate, async (req, res) => {
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

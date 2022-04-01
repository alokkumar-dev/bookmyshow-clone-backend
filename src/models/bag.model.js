const mongoose = require("mongoose");

const bagSchema = new mongoose.Schema({
  img: { type: String, required: false },
  name: { type: String, required: false },
  price: { type: String, required: false },
  discount: { type: String, required: false },
  nos:{ type: Number, required: false },
  time: { type: String, required: false },
  user_id: { type: String, required: false },
});

const Bag = mongoose.model("bag", bagSchema); // user => users

module.exports = Bag;

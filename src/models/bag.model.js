const mongoose = require("mongoose");

const bagSchema = new mongoose.Schema({
  userid: {required:true},
  title: {required:true},
  img:{required:true},
  amount:{required:true}
});

const Bag = mongoose.model("bag", bagSchema); // user => users

module.exports = Bag;

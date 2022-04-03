const mongoose = require("mongoose");

const bagSchema = new mongoose.Schema({
  userid: {type:Number,required:true},
  title: {type:String,required:true},
  img:{type:String,required:true},
  amount:{type:Number,required:true}
});

const Bag = mongoose.model("bag", bagSchema); // user => users

module.exports = Bag;

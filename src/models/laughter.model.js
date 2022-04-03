const mongoose = require("mongoose");

const laughterSchema = new mongoose.Schema({
    Url:{type:String,required:true}, 
});

const Laughter = mongoose.model("laughter", laughterSchema); // user => users

module.exports = Laughter;
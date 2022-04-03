const mongoose = require("mongoose");

const entertainmentSchema = new mongoose.Schema({
    Url:{type:String,required:true}, 
});

const Entertainment = mongoose.model("entertainment", entertainmentSchema); // user => users

module.exports = Entertainment;
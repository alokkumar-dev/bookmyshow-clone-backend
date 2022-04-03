const mongoose = require("mongoose");

const entertainmentsSchema = new mongoose.Schema({
    Url:{type:String,required:true}, 
});

const Entertainments = mongoose.model("entertainment", entertainmentsSchema); // user => users

module.exports = Entertainments;
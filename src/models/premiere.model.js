const mongoose = require("mongoose");

const premiereSchema = new mongoose.Schema({
    url:{type:String,required:true},
    title: {type:String,required:true}
});

const Premiere = mongoose.model("premiere", premiereSchema); // user => users

module.exports = Premiere;
const mongoose = require("mongoose");

const moviesSchema = new mongoose.Schema({
    imageUrl:{type:String,required:true}, 
    title:{type:String,required:true},  
    type: {type:String,required:true}, 
    duration: {type:String,required:true}, 
    release: {type:String,required:true}, 
    ratings:{type:String,required:true}, 
    screenType: {type:String,required:true}, 
    language: {type:String,required:true}, 
    movieType: {type:String,required:true}, 
    about: {type:String,required:true}, 
    backgroundImage:{type:String,required:true}, 
});

const Movies = mongoose.model("movie", moviesSchema); // user => users

module.exports = Movies;
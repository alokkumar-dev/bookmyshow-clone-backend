
const mongoose = require("mongoose");

module.exports= ()=>{
    return mongoose.connect("mongodb+srv://bmnaveen:bmnaveen@cluster0.ayxfh.mongodb.net/bookmyshow-database")
}
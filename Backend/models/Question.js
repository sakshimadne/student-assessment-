const mongoose = require("mongoose")

const questionSchema = new mongoose.Schema({

 questionText:{
   type:String,
   required:true
 },

 category:{
   type:String,
   enum:["analytical","creative","social","leadership","technical"],
   required:true
 },

 options:[
  {
    text:String,
    value:Number
  }
 ]

})

module.exports = mongoose.model("Question",questionSchema)
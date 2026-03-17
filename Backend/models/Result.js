const mongoose = require("mongoose")

const resultSchema = new mongoose.Schema({

 user:{
   type:mongoose.Schema.Types.ObjectId,
   ref:"User"
 },

 scores:{
   analytical:Number,
   creative:Number,
   social:Number,
   leadership:Number,
   technical:Number
 },
 insights: {
  analytical: String,
  creative: String,
  social: String,
  leadership: String,
  technical: String
},

 recommendedCareers:[String]

},
{timestamps:true})

module.exports = mongoose.model("Result",resultSchema)
const mongoose = require("mongoose")

const testSessionSchema = new mongoose.Schema({

 user:{
  type:mongoose.Schema.Types.ObjectId,
  ref:"User"
 },

 answers:[
  {
    questionId:{
      type:mongoose.Schema.Types.ObjectId,
      ref:"Question"
    },

    value:Number
  }
 ],

 completed:{
   type:Boolean,
   default:false
 }

},
{timestamps:true})

module.exports = mongoose.model("TestSession",testSessionSchema)
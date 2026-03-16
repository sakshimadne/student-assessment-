const TestSession = require("../models/TestSession")
const Result = require("../models/Result")
const recommendCareer = require("../utils/careerAlgorithm")
const Question = require("../models/Question")
// Add question (Admin)
exports.addQuestion = async (req, res) => {

 try {

   const { questionText, category, options } = req.body

   // Validation check
   if (!questionText || !category) {
     return res.status(400).json({
       message: "Question text and category required"
     })
   }

   const question = await Question.create({
     questionText,
     category,
     options
   })

   res.status(201).json({
     message: "Question added successfully",
     question
   })

 } catch (error) {

   res.status(500).json({ error: error.message })

 }

}

// Get all questions
exports.getQuestions = async(req,res)=>{

 try{

   const questions = await Question.find()

   res.json(questions)

 }catch(error){

   res.status(500).json({error:error.message})

 }

}

exports.submitTest = async(req,res)=>{

 try{

   const {answers} = req.body

   const userId = req.user

   const questions = await Question.find()
const existingResult = await Result.findOne({ user: userId })

if (existingResult) {
  return res.json({
    message: "Test already completed",
    result: existingResult
  })
}
   const scores={
     analytical:0,
     creative:0,
     social:0,
     leadership:0,
     technical:0
   }

   answers.forEach(answer => {

     const question = questions.find(
        q => q._id.toString() === answer.questionId
     )

     if(question){
        scores[question.category] += answer.value
     }

   })

   const careers = recommendCareer(scores)

   const result = await Result.create({
     user:userId,
     scores,
     recommendedCareers:careers
   })

   await TestSession.create({
     user:userId,
     answers,
     completed:true
   })

   res.json({
     message:"Test submitted successfully",
     result
   })

 }catch(error){

   res.status(500).json({error:error.message})

 }

}



exports.getResult = async (req, res) => {
  try {

    const userId = req.user

    const result = await Result.findOne({ user: userId })

    if (!result) {
      return res.status(404).json({
        message: "Result not found"
      })
    }

    res.json(result)

  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}
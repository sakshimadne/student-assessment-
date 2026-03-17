const TestSession = require("../models/TestSession")
const Result = require("../models/Result")
const recommendCareer = require("../utils/careerAlgorithm")
const generateInsights = require("../utils/insightGenerator");
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
exports.getQuestions = async (req, res) => {
  try {

    const { category } = req.query;

    let filter = {};

    if (category) {

      // Optional: validate category
      const validCategories = [
        "analytical",
        "creative",
        "social",
        "leadership",
        "technical"
      ];

      if (!validCategories.includes(category)) {
        return res.status(400).json({
          message: "Invalid category"
        });
      }

      filter.category = category;
    }

    const questions = await Question.find(filter);

    res.json(questions);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.submitTest = async(req,res)=>{

 try{

   const {answers} = req.body

   const userId = req.user.id
   if (!Array.isArray(answers)) {
  return res.status(400).json({
    message: "Answers must be array"
  });
}

   const questions = await Question.find()
   const categoryCounts = {};

questions.forEach(q => {
  categoryCounts[q.category] = (categoryCounts[q.category] || 0) + 1;
});
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

   if (question) {

  let scoreValue = answer.value;


  if (question.reverse) {
    scoreValue = 6 - answer.value;
  }


  scoreValue = scoreValue * (question.weight || 1);

  scores[question.category] += scoreValue;
}

   })

Object.keys(scores).forEach(category => {

  const maxScore = categoryCounts[category] * 5;

  scores[category] = Math.round(
    (scores[category] / maxScore) * 100
  );

});
   const careers = recommendCareer(scores)
const insights = generateInsights(scores);
 const result = await Result.create({
  user:userId,
  scores,
  recommendedCareers:careers,
  insights
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

   console.log("ERROR IN SUBMIT:", error); 
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
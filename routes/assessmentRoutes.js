const express = require("express")
const router = express.Router()
const isAdmin = require("../middleware/adminMiddleware")
const {
  addQuestion,
  getQuestions,
  submitTest,
  getResult
} = require("../controllers/assessmentController")

const protect = require("../middleware/authMiddleware")

router.post("/add", protect, isAdmin, addQuestion)

router.get("/", protect, getQuestions)

router.post("/submit", protect, submitTest)
router.get("/result", protect, getResult)
module.exports = router
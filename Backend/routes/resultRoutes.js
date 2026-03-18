const express = require("express")
const router = express.Router()

const {
  getMyResult,
  getAllResults,

} = require("../controllers/resultController")

const protect = require("../middleware/authMiddleware")
const isAdmin = require("../middleware/adminMiddleware")

router.get("/my-result", protect, getMyResult)



router.get("/all", protect, isAdmin, getAllResults)

module.exports = router
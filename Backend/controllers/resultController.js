const Result = require("../models/Result")

// Get logged-in user's result
exports.getMyResult = async (req, res) => {
  try {

    const result = await Result.findOne({ user: req.user })

    if (!result) {
      return res.status(404).json({
        message: "No result found"
      })
    }

    res.json(result)

  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}


// Admin: Get all results
exports.getAllResults = async (req, res) => {
  try {

    const results = await Result.find().populate("user", "name email")

    res.json(results)

  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}
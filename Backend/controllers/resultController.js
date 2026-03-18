const Result = require("../models/Result")

exports.getMyResult = async (req, res) => {
  try {

    const userId = req.user.id;

    const result = await Result.findOne({ user: userId });

    if (!result) {
      return res.status(404).json({
        message: "No result found"
      });
    }

    res.json(result);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};



exports.getAllResults = async (req, res) => {
  try {

    const results = await Result.find().populate("user", "name email")

    res.json(results)

  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}
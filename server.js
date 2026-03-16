const express = require("express")
const cors = require("cors")
const connectDB = require("./config/db")
const authRoutes = require("./routes/authRoutes")
const assessmentRoutes = require("./routes/assessmentRoutes")
const errorHandler = require("./middleware/errorMiddleware")
require("dotenv").config()

const app = express()

// Connect Database
connectDB()

// Middlewares
app.use(cors())
app.use(express.json())


// Routes
app.use("/api/auth", authRoutes)
app.use("/api/questions",assessmentRoutes)
app.use(errorHandler)

app.get("/", (req, res) => {
  res.send("Career Assessment API Running")
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
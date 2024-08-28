import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import connectDB from './config/db.js'
import chatRoutes from './routes/chatRoutes.js'
import { createServer } from 'http'

dotenv.config()

const app = express()
const server = createServer(app)

connectDB()

app.use(
  cors({
    origin: 'https://car-spotting-culture.vercel.app',
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type'],
  })
)
app.use(express.json())

app.use('/api', chatRoutes)

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500
  const errorMessage = err.message || 'Something went wrong!'
  res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
  })
})

const PORT = process.env.PORT || 5000
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

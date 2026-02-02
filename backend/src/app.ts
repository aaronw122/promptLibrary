import express from 'express'
const app = express()
import mongoose from 'mongoose'
import * as config from './utils/config'
import logger from './utils/logger'
import * as middleware from './utils/middleware'
import promptsRouter from './controllers/prompts'
import cors from 'cors'



logger.info('connecting to', config.MONGODB_URI)

mongoose
  .connect(config.MONGODB_URI, {family: 4})
  .then(() => {
    logger.info('connected to MongoDB')
  })
  .catch((error) => {
    logger.error('error connecting to MongoDB:', error.message)
  })

app.use(express.json())
app.use(cors({origin: 'http://localhost:5173'}))

app.use(middleware.requestLogger)

app.use('/api/prompts', promptsRouter)

app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)

module.exports = app

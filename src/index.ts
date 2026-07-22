import express from 'express'
import type { Application } from 'express'
import { routes } from './routes/index.js'
import { logger } from './utils/logger.js'
import bodyParser from 'body-parser'
import cors from 'cors'

const app: Application = express()
const port: number = 4000

// parser body req
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// cors app handler
app.use(cors())
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization')
  next()
})
routes(app)

app.listen(port, () => {
  logger.info(`Server is running on http://localhost:${port}`)
})

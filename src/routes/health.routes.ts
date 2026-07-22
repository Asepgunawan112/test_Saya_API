import { Router, type Request, type Response } from 'express'
import { logger } from '../utils/logger.js'

export const HealthRouter: Router = Router()

HealthRouter.get('/', (req: Request, res: Response) => {
  logger.info('Health check endpoint called')
  res.status(200)
  res.send({ status: '200', data: 'Server is healthy' })
})

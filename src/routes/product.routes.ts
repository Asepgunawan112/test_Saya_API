import { NextFunction, Router, type Request, type Response } from 'express'
import { logger } from '../utils/logger.js'
import { createProductValidation } from '../validation/product.validation.js'

export const ProductRouter: Router = Router()

ProductRouter.get('/', (req: Request, res: Response) => {
  logger.info('Product endpoint called')
  res.status(200)
  res.send({ status: true, statusCode: 200, data: [{ name: 'sepatu sport', price: 500000 }] })
})

ProductRouter.post('/', (req: Request, res: Response, next: NextFunction) => {
  const { error, value } = createProductValidation(req.body)
  if (error) {
    logger.error(`Validation error: ${error.message}`)
    return res.status(400).send({ status: false, statusCode: 400, message: error.message })
  }
  logger.info('Product endpoint called')
  return res.status(200).send({ status: true, statusCode: 200, data: value, message: 'Product created successfully' })
  next()
})

import express = require('express')
import type { Application, Request, Response } from 'express'

const app: Application = express()
const port: number = 4000

app.use('/health', (req: Request, res: Response) => {
  res.status(200)
  res.send({ status: '200', data: 'Server is healthy' })
})

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`)
})

import { Application, Router } from 'express'
import { HealthRouter } from './health.routes.js'
import { ProductRouter } from './product.routes.js'

const _routes: Array<[string, Router]> = [
  ['health', HealthRouter],
  ['product', ProductRouter],
]

const routes = (app: Application) => {
  _routes.forEach((route) => {
    const [path, router] = route
    app.use(`/${path}`, router)
  })
}

export { routes }

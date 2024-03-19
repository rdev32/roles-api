import express, { type Application } from 'express'
import morgan from 'morgan'

import 'dotenv/config'

import router from './routers'
import errorHandler from './middlewares/error.middleware'

const app: Application = express()

app.set('port', process.env.NODE_PORT ?? 5000)
app.disable('x-powered-by')

app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(router)
app.use(errorHandler)

export default app

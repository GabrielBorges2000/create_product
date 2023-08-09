import express from 'express'
import expressEjsLayouts from 'express-ejs-layouts'
import bodyParser from 'body-parser'
import productRouter from './router/product.js'

const app = express()

app.set('view engine', 'ejs')
app.use(expressEjsLayouts)
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(express.static('/public'))

app.use(productRouter)

export default app

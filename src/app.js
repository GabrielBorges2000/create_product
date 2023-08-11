import express from 'express'
import expressEjsLayouts from 'express-ejs-layouts'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import productRouter from './router/product.js'
import pageRouter from './router/page.js'
// import { isAuth } from './middleware/isAuth.js'

const app = express()

app.set('view engine', 'ejs')
app.use(expressEjsLayouts)
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(express.static('./public'))

app.use(cookieParser())

// app.use(isAuth)

app.use(productRouter)
app.use(pageRouter)

export default app

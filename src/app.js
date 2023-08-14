import express from 'express'
import expressEjsLayouts from 'express-ejs-layouts'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import { env } from './env/index.js'
import router from './router/index.js'
// import { isAuth } from './middleware/isAuth.js'

const app = express()

app.set('view engine', 'ejs')
app.use(expressEjsLayouts)
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(express.static('./src'))

app.use(cookieParser())

// app.use(isAuth)

app.use(router)

const port = env.PORT

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`)
})

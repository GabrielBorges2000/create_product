// import crypto from 'node:crypto'
import { Router as routersExpress } from 'express'
const pageRouter = routersExpress()
const router = pageRouter

router.get('/', function (req, res) {
  res.render('pages/home', {
    teste: 'teste1',
  })
})

router.get('/products', function (req, res) {
  res.render('pages/products')
})

export default pageRouter

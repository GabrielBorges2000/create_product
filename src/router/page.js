// import crypto from 'node:crypto'
import axios from 'axios'
import { Router as routersExpress } from 'express'
const pageRouter = routersExpress()
const router = pageRouter

router.get('/', async function (req, res) {
  res.render('pages/login')
})

router.get('/home', async function (req, res) {
  const products = await axios.get('http://localhost:3000/product')

  res.render('pages/home', {
    teste: products.data,
  })
})

router.get('/cadastro', async function (req, res) {
  const products = await axios.get('http://localhost:3000/product')

  res.render('pages/cadastro-product', {
    teste: products.data,
  })
})

export default pageRouter

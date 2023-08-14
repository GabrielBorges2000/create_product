// import crypto from 'node:crypto'
import axios from 'axios'
import { Router as routersExpress } from 'express'

const pageRouter = routersExpress()

pageRouter.get('/', async function (req, res) {
  res.render('pages/login')
})

pageRouter.get('/home', async function (req, res) {
  const products = await axios.get('http://localhost:3000/product')

  res.render('pages/home', {
    teste: products.data,
  })
})

pageRouter.get('/cadastro', async function (req, res) {
  const products = await axios.get('http://localhost:3000/product')

  res.render('pages/cadastro-product', {
    products: products.data,
  })
})

export default pageRouter

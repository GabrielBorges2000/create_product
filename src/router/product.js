// import crypto from 'node:crypto'
import { Router as routersExpress } from 'express'
import { knex } from '../database.js'

import crypto from 'node:crypto'

const productRouter = routersExpress()
const router = productRouter

router.get('/product', async (req, res) => {
  const products = await knex('product').select('*')
  // const product = await knex('product')
  //   .insert({
  //     id: crypto.randomUUID(),
  //     product_name: 'Produto de teste',
  //     value: 25,
  //   })
  //   .returning('*')

  return res.json(products)
})

router.post('/product', async (req, res) => {
  const createProduct = await knex('product').insert({
    id: crypto.randomUUID(),
    product_name: 'Produto de teste',
    value: 25,
  })

  return res.json(createProduct)
})

export default productRouter

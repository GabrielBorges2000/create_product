import { randomUUID } from 'node:crypto'
import { Router as routersExpress } from 'express'
import { z } from 'zod'
import { knex } from '../database/index.js'

const productRouter = routersExpress()

productRouter.get('/product', async (req, res) => {
  const products = await knex('product').select('*')

  return res.json(products)
})

productRouter.get('/product/:id', async (req, res) => {
  const getProductParamsSchema = z.object({
    id: z.string(),
  })

  const { id } = getProductParamsSchema.parse(req.params)

  const product = await knex('product').where({ id }).first()

  return res.json({ product })
})

productRouter.post('/product', async (req, res) => {
  const createProductBodySchema = z.object({
    productName: z.string(),
    value: z.string(),
    stock: z.string(),
  })

  const { productName, value, stock } = createProductBodySchema.parse(req.body)

  await knex('product').insert({
    id: randomUUID(),
    productName,
    value,
    stock,
  })

  return res.status(201).send('Created Product!')
})

productRouter.put('/product/:id', async (req, res) => {
  const getProductParamsSchema = z.object({
    id: z.string().optional(),
    productName: z.string().optional(),
    value: z.string().optional(),
    stock: z.string().optional(),
  })

  const { id } = getProductParamsSchema.parse(req.params)
  const { productName, value, stock } = getProductParamsSchema.parse(req.body)

  const product = await knex('product').where({ id }).update({
    productName,
    value,
    stock,
  })

  return res.json(product)
})

productRouter.delete('/product/:id', async (req, res) => {
  const getProductParamsSchema = z.object({
    id: z.string(),
  })

  const { id } = getProductParamsSchema.parse(req.params)

  await knex('product').where({ id }).select('*').del()

  return res.status(200).send('Delete Product!')
})

export default productRouter

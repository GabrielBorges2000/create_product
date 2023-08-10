// import crypto from 'node:crypto'
import { randomUUID } from 'node:crypto'
import { Router as routersExpress } from 'express'
import { knex } from '../database.js'
import { z } from 'zod'

const productRouter = routersExpress()
const router = productRouter

router.get('/product', async (req, res) => {
  const { sessionId } = req.cookies

  if (!sessionId) {
    return res.status(401).send({
      error: 'Unauthotized!',
    })
  }

  const products = await knex('product').where({ sessionId }).select('*')

  return res.json({ products })
})

router.get('/product/:id', async (req, res) => {
  const { sessionId } = req.cookies

  if (!sessionId) {
    return res.status(401).send({
      error: 'Unauthotized!',
    })
  }

  const getProductParamsSchema = z.object({
    id: z.string().uuid(),
  })

  const { id } = getProductParamsSchema.parse(req.params)

  const product = await knex('product').where({ id, sessionId }).first()

  return res.json({ product })
})

router.post('/product', async (req, res) => {
  const createProductBodySchema = z.object({
    productName: z.string(),
    value: z.number(),
  })

  const { productName, value } = createProductBodySchema.parse(req.body)

  let sessionId = req.cookies.sessionId

  if (!sessionId) {
    sessionId = randomUUID()

    res.cookie('sessionId', sessionId, {
      path: '/',
      maxAge: 1000 * 60 * 60 * 24 * 1, // 1 days
    })
  }

  await knex('product').insert({
    id: randomUUID(),
    productName,
    value,
    sessionId,
  })

  return res.status(201).send('Created Product!')
})

router.put('/product/:id', async (req, res) => {
  const { sessionId } = req.cookies

  if (!sessionId) {
    return res.status(401).send({
      error: 'Unauthotized!',
    })
  }

  const getProductParamsSchema = z.object({
    id: z.string().uuid().optional(),
    productName: z.string().optional(),
    value: z.number().optional(),
    stock: z.number().optional(),
  })

  const { id } = getProductParamsSchema.parse(req.params)
  const { productName, value, stock } = getProductParamsSchema.parse(req.body)

  const product = await knex('product').where({ id, sessionId }).update({
    productName,
    value,
    stock,
  })

  return res.json(product)
})

router.delete('/product/:id', async (req, res) => {
  const getProductParamsSchema = z.object({
    id: z.string().uuid(),
  })

  const { id } = getProductParamsSchema.parse(req.params)

  await knex('product').delete(id)

  return res.status(200).send('Delete Product!')
})

export default productRouter

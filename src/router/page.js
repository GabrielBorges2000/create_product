// import crypto from 'node:crypto'
import { randomUUID } from 'node:crypto'
import { Router as routersExpress } from 'express'
import { knex } from '../database.js'
import { z } from 'zod'

const pageRouter = routersExpress()
const router = pageRouter

router.get('/product', async (req, res) => {
  const products = await knex('product').select('*')
  return res.json({ products })
})

router.get('/product/:id', async (req, res) => {
  const getProductParamsSchema = z.object({
    id: z.string().uuid(),
  })

  const { id } = getProductParamsSchema.parse(req.params)

  const product = await knex('product').where('id', id).first()

  return res.json({ product })
})

router.post('/product', async (req, res) => {
  const createProductBodySchema = z.object({
    productName: z.string(),
    value: z.number(),
    // sessionId: z.string().uuid(),
  })

  const { productName, value } = createProductBodySchema.parse(req.body)

  // let sessionId = createProductBodySchema.parse(req.cookies.sessionId)

  // if (!sessionId) {
  //   sessionId = randomUUID()

  //   res.cookie('sessionId', sessionId, {
  //     path: '/',
  //     maxAge: 1000 * 60 * 60 * 24 * 7, // 7 days
  //   })
  // }

  await knex('product').insert({
    id: randomUUID(),
    productName,
    value,
    // sessionId,
  })

  return res.status(201).send('Created Product!')
})

router.put('/product/:id', async (req, res) => {
  const getProductParamsSchema = z.object({
    id: z.string().uuid().optional(),
    productName: z.string().optional(),
    value: z.number().optional(),
    stock: z.number().optional(),
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

router.delete('/', async (req, res) => {

  return 
})

export default pageRouter

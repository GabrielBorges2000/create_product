import { randomUUID } from 'node:crypto'
import { Router as routersExpress } from 'express'
import { knex } from '../database.js'
import { z } from 'zod'

const userRouter = routersExpress()
const router = userRouter

router.get('/users', async (req, res) => {
  const users = await knex('users').select('*')

  return res.status(200).json(users)
})

router.get('/users/:id', async (req, res) => {
  const { userId } = req.cookies

  const getUserParamsSchema = z.object({
    userName: z.string(),
  })

  const { userName } = getUserParamsSchema.parse(req.params)

  const user = await knex('users')
    .where({ userName })
    .select({ userId })
    .first()

  return res.status(200).json({ user })
})

router.post('/users', async (req, res) => {
  const createUserBodySchema = z.object({
    userName: z.string(),
    password: z.string(),
  })

  const { userName, password } = createUserBodySchema.parse(req.body)

  let userId = req.cookies.userId

  if (!userId) {
    userId = randomUUID()

    res.cookie('userId', userId, {
      path: '/',
    })
  }

  await knex('user').insert({
    userId: randomUUID(),
    userName,
    password,
    // userId,
  })

  return res.status(201).send('Created user!')
})

// router.put('/users/:id', async (req, res) => {
//   // const { userId } = req.cookies

//   const getUserParamsSchema = z.object({
//     id: z.string().uuid().optional(),
//     userName: z.string().optional(),
//     value: z.number().optional(),
//     stock: z.number().optional(),
//   })

//   const { id } = getUserParamsSchema.parse(req.params)
//   const { userName, value, stock } = getUserParamsSchema.parse(req.body)

//   const user = await knex('users').where({ id /*  userId */ }).update({
//     userName,
//     value,
//     stock,
//   })

//   return res.status(201).json(user)
// })

// router.delete('/users/:id', async (req, res) => {
//   const getUserParamsSchema = z.object({
//     id: z.string().uuid(),
//   })

//   const { id } = getUserParamsSchema.parse(req.params)

//   await knex('users').delete(id).returning()

//   return res.status(200).send('Delete user!')
// })

export default userRouter

import { randomUUID } from 'node:crypto'
import { z } from 'zod'
import { knex } from '../database/index.js'
import { Router as routersExpress } from 'express'

const userRouter = routersExpress()

userRouter.get('/users/:id', async (req, res) => {
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

userRouter.post('/users', async (req, res) => {
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

export default userRouter

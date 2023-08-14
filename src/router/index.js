import { Router as routersExpress } from 'express'
import productRouter from './product.js'
import userRouter from './user.js'
import pageRouter from './page.js'

const router = routersExpress()

router.use(productRouter)

router.use(pageRouter)

router.use(userRouter)

export default router

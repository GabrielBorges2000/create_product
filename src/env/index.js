import 'dotenv/config'
import { z } from 'zod'

const envSchema = z.object({
  PORT: z.coerce.number().default(3000),
  NODE_ENV: z.enum(['development', 'test', 'production']).default('production'),
  DATABASE_CLIENT: z.string().default('root'),
  DATABASE_USER: z.string().default('root'),
  DATABASE_URL: z.string().default('./db/app.db'),
  DATABASE_PASSWORD: z.string(),
})

const _env = envSchema.safeParse(process.env)

export const env = _env.data

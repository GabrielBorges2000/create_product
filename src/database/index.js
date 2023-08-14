import setupKnex from 'knex'
import { env } from '../env/index.js'

export const knexConfig = {
  client: 'mysql',
  connection: {
    host: 'localhost',
    port: '3306',
    user: env.DATABASE_USER,
    password: env.DATABASE_PASSWORD,
    database: 'product',
  },
}

export const knex = setupKnex(knexConfig)

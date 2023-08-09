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
  // useNullAsDefault: true,
  // migrations: {
  //   extensions: 'js',
  //   directory: './db/migrations',
  // },
}

export const knex = setupKnex(knexConfig)

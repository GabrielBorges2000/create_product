import setupKnex from 'knex'
import { env } from '../env/index.js'

if (!process.env.DATABASE_URL) {
  throw new Error('DATABASE_URL env not found!')
}

export const knexConfig = {
  client: 'sqlite',
  connection: {
    filename: env.DATABASE_URL,
  },
  useNullAsDefault: true,
  migrations: {
    extensions: 'js',
    directory: './db/migrations',
  },
}


export const knex = setupKnex(knexConfig)

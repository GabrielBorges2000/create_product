import setupKnex from 'knex'
import { env } from '../env/index.js'

// export const knexConfig = {
//   client: 'mysql',
//   connection: {
//     host: 'localhost',
//     port: '3306',
//     user: env.DATABASE_USER,
//     password: env.DATABASE_PASSWORD,
//     database: 'product',
//   }
// }
const baseurl =
  'postgres://product_gerence_user:HBFNttzGAIrRdgHIybEMVikgrfeJh8nS@dpg-cjb857qnip6c73df01eg-a.ohio-postgres.render.com/product_gerence'

export const knexConfig = {
  client: env.DATABASE_CLIENT,
  connection: {
    filename: baseurl,
  },
  // env.DATABASE_CLIENT === 'sqlite'
  //   ? {
  //     filename: env.DATABASE_URL,
  //   }
  //   : env.DATABASE_CLIENT,
  useNullAsDefault: true,
  migrations: {
    extensions: 'js',
    directory: './db/migrations',
  },
}

export const knex = setupKnex(knexConfig)

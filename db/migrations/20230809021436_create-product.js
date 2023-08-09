/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function up(knex) {
  await knex.schema.createTable('product', (table) => {
    table.uuid('id').primary()
    table.text('product_name').notNullable()
    table.decimal('value', 10, 2).notNullable()
    table.decimal('stock', 10, 2)
    table.timestamp('created_at').defaultTo(knex.fn.now()).notNullable()
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function down(knex) {
  await knex.schema.dropTable('product')
}

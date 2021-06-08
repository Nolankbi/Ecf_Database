export async function up(knex) {
  await knex.schema.createTable('author', (table) => {
    table.increments('id').unique().primary()
    table.string('lastname', 190)
    table.string('firstname', 190)
  })
}

export async function down(knex) {
  return knex.schema.dropTable('author')
}
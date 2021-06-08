export async function up(knex) {
  await knex.schema.createTable('user', (table) => {
    table.increments('id').primary().unique()
    table.specificType('roles', 'text[]')
    table.string('email', 190)
    table.string('password', 190)
  })
}

export async function down(knex) {
  return knex.schema.dropTable('user')
}
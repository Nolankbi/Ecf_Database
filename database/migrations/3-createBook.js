export async function up(knex) {
  await knex.schema.createTable('book', (table) => {
    table.increments('id').unique().primary()
    table.string('title', 190)
    table.string('isbn', 190)
    table.integer('authorId').references('author.id')
    table.integer('pages')
    table.integer('edition_year')
  })
}

export async function down(knex) {
  return knex.schema.dropTable('book')
}
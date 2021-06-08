export async function up(knex) {
  await knex.schema.createTable('genre', (table) => {
    table.increments('id').unique().primary()
    table.string('name')
    table.text('description')
  })

  await knex.schema.createTable('book_genre', (table) => {
    table.integer('bookId')
      .notNullable()
      .references('book.id')
      .onDelete('CASCADE')
      .onUpdate('CASCADE')
      .index()

      table.integer('genreId')
      .notNullable()
      .references('genre.id')
      .onDelete('CASCADE')
      .onUpdate('CASCADE')
      .index()

      table.unique(['bookId', 'genreId'])
  })
}

export async function down(knex) {
  await knex.schema.dropTable('genre')
  return knex.schema.dropTable('book_genre')
}
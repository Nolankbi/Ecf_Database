export async function up(knex) {
  await knex.schema.createTable('loaner', (table) => {
    table.increments('id').primary().unique()
    table.string('lastname', 190)
    table.string('firstname', 190)
    table.string('tel', 190)
    table.boolean('active')
    table.timestamp('creation_date')
    table.timestamp('modification_date')
    table.integer('user').references('user.id')
  })

  await knex.schema.createTable('loan', (table) => {
    table.increments('id').primary().unique()
    table.timestamp('loan_date')
    table.timestamp('return_date').defaultTo(null)
    table.integer('loanerId').references('loaner.id')
    table.integer('bookId').references('book.id')
  })
}

export async function down(knex) {
  await knex.schema.dropTable('loaner')
  return knex.schema.dropTable('loan')
}
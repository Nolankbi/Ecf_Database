import {
  user,
  author,
  book,
  genre,
  book_genre,
  loaner,
  loan,
} from './datasets/dataset.js'

export async function seed(knex) {
  const datasets = {
    user,
    author,
    book,
    genre,
    book_genre,
    loaner,
    loan,
  }

  for (const tableName of Object.keys(datasets)) {
    await knex(tableName).insert(datasets[`${tableName}`])
  }
}

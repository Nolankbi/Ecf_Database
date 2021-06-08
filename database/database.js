import databaseConfig from './database.common.js'

export default {
  ...databaseConfig,
  migrations: {
    tableName: 'knex_migrations',
    directory: '../database/migrations',
  },
  seeds: {
    directory: '../database/seeds',
  },
}

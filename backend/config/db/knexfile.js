// Update with your config settings.

module.exports = {
  development: {
    client: 'postgresql',
    connection: {
      database: 'vehicleDB',
      user:     'psqlUser',
      password: 'examplePassword@123',
      port: 5433
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'vehicle_knex_migrations'
    }
  }
};

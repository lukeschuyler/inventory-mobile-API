// Update with your config settings.

module.exports = {

  test: {
    client: 'pg',
    connection: {
      database: 'inventory'
    },
    migrations: {
      directory: __dirname + '/app/db/migrations'
    },
    seeds: {
      directory: __dirname + '/app/db/seeds'
    }
  },
  development: {
    client: 'pg',
    debug: true,
    connection: {
      database: 'inventory'
    },
    migrations: {
      directory: __dirname + '/app/db/migrations'
    },
    seeds: {
      directory: __dirname + '/app/db/seeds'
    }
  },
  production: {
    client: 'pgs',
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: __dirname + '/app/db/migrations'
    },
    seeds: {
      directory: __dirname + '/app/db/seeds'
    }
  }
};

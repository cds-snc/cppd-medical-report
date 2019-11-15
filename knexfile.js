// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: {
      host: 'localhost',
      database: 'postgres',
      user: 'admin', 
      password: 'foo',
    },
    seeds: { 
      directory: './db/seeds',
    },
    migrations:{
      directory: './db/migrations',
    },
  },
};

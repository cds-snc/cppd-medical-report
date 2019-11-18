// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: {
      host: 'localhost',
      database: 'postgres',
      user: 'postgres', 
    },
    seeds: { 
      directory: './db/seeds',
    },
    migrations:{
      directory: './db/migrations',
    },
  },
};

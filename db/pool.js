const { Pool } = require("pg");

module.exports = new Pool({
  host: process.env.host, // or wherever the db is hosted
  user: process.env.username,
  database: process.env.db,
  password: process.env.pass,
  port: process.env.dbport,
  ssl: true,

  // The default port
});

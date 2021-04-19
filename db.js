const { Pool } = require('pg');
require("dotenv").config();

const connectionString = process.env.NODE_ENV === "production"
  ? process.env.DATABASE_URL
  : `postgresql://${process.env.PG_USER}:${process.env.PG_PASS}@${process.env.PG_HOST}:${process.env.PG_PORT}/${process.env.PG_DATABASE}`;

const conn = new Pool({ connectionString });

module.exports = conn;
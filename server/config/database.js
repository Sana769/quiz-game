// Creates and reuses SQL Server connection pool for API routes.
const sql = require('mssql');
require('dotenv').config();

const config = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  server: process.env.DB_SERVER,
  database: process.env.DB_DATABASE,
  port: Number(process.env.DB_PORT || 1433),
  options: {
    encrypt: false,
    trustServerCertificate: true
  }
};

let pool;

const getPool = async () => {
  if (pool) {
    return pool;
  }

  pool = await sql.connect(config);
  return pool;
};

module.exports = { sql, getPool };

const Pool = require('pg').Pool
const pool = new Pool({
  host: '192.168.0.1',
  port: 5432,
  database: process.env.PGDATABASE,
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD,
})
module.exports = pool

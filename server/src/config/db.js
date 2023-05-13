const Pool = require('pg').Pool
const pool = new Pool({
  host: process.env.LOCAL_PGHOST,
  port: process.env.PGPORT,
  database: process.env.PGDATABASE,
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD,
})
module.exports = pool

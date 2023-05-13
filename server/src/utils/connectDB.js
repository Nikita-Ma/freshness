const colors = require('colors')

const Pool = require('pg').Pool
function connectDB() {
  // TODO: insert values in .ENV && write docs
  const pool = new Pool({
    host: process.env.LOCAL_PGHOST,
    port: process.env.PGPORT,
    database: process.env.PGDATABASE,
    user: process.env.PGUSER,
    password: process.env.PGPASSWORD,
  })
  pool
    .connect()
    .then(() => console.log('[DATABASE] Connected'.bold.green.underline))
    .catch((err) =>
      console.error('connection error'.bold.red.underline, err.stack)
    )
}
module.exports = connectDB

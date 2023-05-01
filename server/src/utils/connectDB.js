const colors = require('colors')

const Pool = require('pg').Pool
function connectDB() {
  // TODO: insert values in .ENV && write docs
  const pool = new Pool({
    host: '192.168.0.1',
    port: 5432,
    database: 'postgres',
    user: 'postgres',
    password: '1234',
  })
  pool
    .connect()
    .then(() => console.log('[DATABASE] Connected'.bold.green.underline))
    .catch((err) =>
      console.error('connection error'.bold.red.underline, err.stack)
    )
}
module.exports = connectDB

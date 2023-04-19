const Pool = require('pg').Pool
function connectDB() {
  // TODO: insert values in .ENV && write docs
  const pool = new Pool({
    host: 'localhost',
    port: 5432,
    database: 'postgres',
    user: 'postgres',
    password: '1234',
  })
  pool
    .connect()
    .then(() => console.log('connected'))
    .catch((err) => console.error('connection error', err.stack))
}
module.exports = connectDB

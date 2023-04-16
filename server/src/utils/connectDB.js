const { Client } = require('pg')
function connectDB() {
  // TODO: insert values in .ENV && write docs
  const client = new Client({
    host: 'localhost',
    port: 5432,
    database: 'DB_USER',
    user: 'postgres',
    password: '1234',
  })
  client
    .connect()
    .then(() => console.log('connected'))
    .catch((err) => console.error('connection error', err.stack))
}
module.exports = connectDB

const { Client } = require('pg')
function connectDB() {
  const client = new Client({
    host: 'my.database-server.com',
    port: 5334,
    database: 'database-name',
    user: 'database-user',
    password: 'secretpassword!!',
  })
  client
    .connect()
    .then(() => console.log('connected'))
    .catch((err) => console.error('connection error', err.stack))
}
module.exports = connectDB

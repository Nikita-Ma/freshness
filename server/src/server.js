const express = require('express')
const colors = require('colors')
const bodyParser = require('express')
const app = express()

const loginRoutes = require('./routes/loginRoutes')

app.use(express.json())

const PORT = process.env.PORT || 5000

app.get('/', (req, res) => {
  res.send('Api running..')
})
app.use('/v1/login', loginRoutes)

app.listen(
  PORT,
  console.log(
    `[Server] Server running in ${process.env.NODE_ENV} on ${PORT}`.bold.green
      .underline
  )
)

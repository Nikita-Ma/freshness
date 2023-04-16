const express = require('express')
const colors = require('colors')
const bodyParser = require('express')
const app = express()

const loginRoutes = require('./routes/loginRoutes')
const { notFound, errorHandler } = require('./middleware/errorMiddleware')

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, x-Requested-With, Content-Type, Accept'
  )
  next()
})
app.use(express.json())

const PORT = process.env.PORT || 5000

app.get('/', (req, res) => {
  res.json('Api running..')
})
app.use('/v1/login', loginRoutes)

// * MIDDLEWARE
app.use(notFound)

app.use(errorHandler)

app.listen(
  PORT,
  console.log(
    `[Server] Server running in ${process.env.NODE_ENV} on ${PORT}`.bold.green
      .underline
  )
)

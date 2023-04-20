const express = require('express')
const colors = require('colors')
const bodyParser = require('express')
const app = express()

const registerRoutes = require('./routes/registerRoutes')
const loginRoutes = require('./routes/loginRoutes')
const productRoutes = require('./routes/productRoutes')
const { notFound, errorHandler } = require('./middleware/errorMiddleware')
const connectDB = require('./utils/connectDB')

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, x-Requested-With, Content-Type, Accept'
  )
  next()
})

// * Connect DataBase
connectDB()

app.use(express.json())

app.get('/', (req, res) => {
  res.json('Api running..')
})
app.use('/v1/login', loginRoutes)

app.use('/v1/product', productRoutes)

app.use('/v1/register', registerRoutes)
// * MIDDLEWARE
app.use(notFound)

app.use(errorHandler)

const PORT = process.env.PORT || 3000

app.listen(
  PORT,
  console.log(
    `[Server] Server running in ${process.env.NODE_ENV} on ${PORT}`.bold.green
      .underline
  )
)

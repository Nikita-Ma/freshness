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
  res.setHeader('Access-Control-Allow-Origin', 'http://example.com')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
  res.setHeader('Access-Control-Allow-Credentials', true)
  next()
})

// * Connect DataBase
connectDB()

app.use(express.json())

app.get('/', (req, res) => {
  res.json('Api running..')
})
// app.use('/v1/login', loginRoutes)
// TODO: REFACTOR SAVE IMG ON DIR NOT DATABASE!!
app.use('/v1/product', productRoutes)

app.use('/v1/register', registerRoutes)
app.use('/v1/login', loginRoutes)
// * MIDDLEWARE
app.use(notFound)

app.use(errorHandler)

const PORT = process.env.PORT || 3000

app.listen(
  PORT,
  console.log(
    `[Server] Server running HOST ${process.env.LOCAL_PGHOST} in ${process.env.PORT} on ${PORT}`
      .bold.green.underline
  )
)

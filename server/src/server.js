const express = require('express')
const cors = require('cors')
const colors = require('colors')
const bodyParser = require('express')
const app = express()
const fileUpload = require('express-fileupload')
const path = require('path')
const registerRoutes = require('./routes/registerRoutes')
const loginRoutes = require('./routes/loginRoutes')
const productRoutes = require('./routes/productRoutes')
const { notFound, errorHandler } = require('./middleware/errorMiddleware')
const connectDB = require('./utils/connectDB')

app.use(cors())

// * Connect DataBase
connectDB()

app.use(express.json())
app.use(
  fileUpload({
    createParentPath: true,
  })
)
app.get('/', (req, res) => {
  res.json('Api running..')
})
app.post('/v1/upload', (req, res) => {
  if (!req.files) {
    return res.status(400).send('No files were uploaded.')
  }
  const file = req.files.file
  const path = __dirname + '/files/' + file.name
  file.mv(path, (err) => {
    if (err) {
      return res.status(500).send(err)
    }
    return res.send({ status: 'success', path: path })
  })
})

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

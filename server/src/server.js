const express = require('express')
const colors = require('colors')

const app = express()

app.use(express.json())

const PORT = process.env.PORT || 5000

app.listen(
  PORT,
  console.log(
    `[Server] Server running in ${process.env.NODE_ENV} on ${PORT}`.bold.green
      .underline
  )
)

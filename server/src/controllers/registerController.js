require('dotenv').config()
const expressAsyncHandler = require('express-async-handler')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const db = require('../config/db')

const registerController = expressAsyncHandler(async (req, res, next) => {
  try {
    const { u_name, u_password, u_data, u_id } = req.body
    if (!(u_name && u_password && u_data && u_id)) {
      res.status(400).send('Request all input')
    }
    const checkUser = await db.query(
      'SELECT * FROM user_data WHERE u_name = $1',
      [u_name]
    )
    if (checkUser.rows.length) {
      return res.status(404).json('User Already Exist. Please Login')
    }
    const encryptedPassword = await bcrypt.hash(u_password, 10)

    const createUser = await db.query(
      'INSERT INTO user_data (u_name, u_password, u_data, u_id) VALUES ($1, $2, $3, $4)',
      [u_name, encryptedPassword, u_data, u_id]
    )

    const token = jwt.sign({ user_id: u_data, u_name }, process.env.TOKEN_KEY, {
      expiresIn: '365d',
    })
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Credentials', 'true')
    res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT')
    res.setHeader(
      'Access-Control-Allow-Headers',
      'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers'
    )
    res.setHeader('Authorization', `Bearer ${token}`)
    const user = {}
    Object.assign(user, { token })
    // return new user
    res.status(201).json(user)
  } catch (e) {
    console.error(`Error ${e}`)
    process.exit(1)
  }
})
module.exports = registerController

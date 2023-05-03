const asyncHandler = require('express-async-handler')
const db = require('../config/db')
const jwt = require('jsonwebtoken')

const getLogin = asyncHandler(async (req, res) => {
  const findPerson = await db.query('SELECT * FROM user_data')
  const dataId = req.body.u_id.slice(0, req.body.u_id.length - 1)
  const checkId = findPerson.rows.find((dataObj) => dataObj.u_id === dataId)
  console.log(checkId)
  if (!checkId) {
    return res.status(401).send('Not Unauthorized')
  }
  const token = jwt.sign(
    { user_id: checkId.u_data, u_name: checkId.u_name },
    process.env.TOKEN_KEY,
    {
      expiresIn: '365d',
    }
  )
  return res.json({ token })
})

module.exports = getLogin

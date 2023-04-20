const asyncHandler = require('express-async-handler')
const db = require('../config/db')

const getLogin = asyncHandler(async (req, res) => {
  const findPerson = await db.query('SELECT * FROM user_data')

  const dataId = req.body.idM
  const checkId = findPerson.rows.find((dataObj) => dataObj.u_data == dataId)

  if (!checkId) {
    return res.status(401).send('Not Unauthorized')
  }
  return res.send(JSON.stringify('Success'))
})

module.exports = getLogin

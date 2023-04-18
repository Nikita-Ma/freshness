const asyncHandler = require('express-async-handler')
const db = require('../config/db')

const getLogin = asyncHandler(async (req, res) => {
  const { idM } = req.params
  const findPerson = await db.query('SELECT * FROM user_data')
  console.log(`SQL`, findPerson)
  const dataId = req.body.idM
  const checkId = fakeDB.find((dataObj) => dataObj.idM === dataId)
  if (JSON.stringify(checkId) === undefined) {
    res.status(401).send('Not Unauthorized')
  }
  res.send(JSON.stringify('Success'))
})

module.exports = getLogin

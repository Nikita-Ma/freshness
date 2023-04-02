const asyncHandler = require('express-async-handler')

// TODO: DELETE ON FUTURE
const fakeDB = [
  {
    name: 'Nik',
    wStatus: 'Seller',
    idM: '2131251258912',
    lSession: true,
  },
  {
    name: 'Nik',
    wStatus: 'Seller',
    idM: '2131251258912',
    lSession: true,
  },
]

const getLogin = asyncHandler(async (req, res) => {
  const dataId = req.body.idM
  const checkId = fakeDB.find((dataObj) => dataObj.idM === dataId)
  if (JSON.stringify(checkId) === undefined) {
    res.status(401).send('Not Unauthorized')
  }
  res.send(JSON.stringify('Success'))
})

module.exports = getLogin

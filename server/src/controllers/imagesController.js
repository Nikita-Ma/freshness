const asyncHandler = require('express-async-handler')
const path = require('path')

const getImages = asyncHandler((req, res) => {
  const imagePath = path.join(__dirname, '../files', `${req.query.id}`) // Replace with the actual path to your image
  return res.sendFile(imagePath)
})

module.exports = getImages

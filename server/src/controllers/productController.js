const asyncHandler = require('express-async-handler')

const createProduct = asyncHandler(async (req, res) => {
  const {
    nameProduct,
    idProduct,
    dateProduct,
    countProduct,
    descProduct,
    file,
  } = req.body
  console.log(
    nameProduct,
    idProduct,
    dateProduct,
    countProduct,
    descProduct,
    file
  )
  res.sendStatus(401)
})
module.exports = createProduct

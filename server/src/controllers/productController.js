const asyncHandler = require('express-async-handler')
const db = require('../config/db')

const createProduct = asyncHandler(async (req, res) => {
  const {
    nameProduct,
    idProduct,
    dateProduct,
    countProduct,
    descProduct,
    file,
  } = req.body

  const addNewProduct = await db.query(
    'INSERT INTO product_data ( p_name,   p_id,p_date,p_desc, p_img,p_file) VALUES ($1, $2, $3, $4, $5,$6)',
    [nameProduct, idProduct, dateProduct, countProduct, descProduct, file]
  )

  console.log(
    nameProduct,
    idProduct,
    dateProduct,
    countProduct,
    descProduct,
    file
  )
  console.log(addNewProduct)
  res.sendStatus(401)
})

module.exports = createProduct

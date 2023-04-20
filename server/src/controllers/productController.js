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
    'INSERT INTO product_data ( p_name, p_id, p_date, p_count, p_desc, p_img) VALUES ($1, $2, $3, $4, $5, $6)',
    [nameProduct, idProduct, dateProduct, countProduct, descProduct, file]
  )
  return res.json('Product Create')
})

const deleteProduct = asyncHandler(async (req, res, next) => {
  const { nameProduct, idProduct } = req.body
  if (nameProduct && idProduct) {
    const deleteProductName = await db.query(
      'DELETE FROM product_data WHERE p_name=$1',
      [nameProduct]
    )
    return res.json('Product deleted (name&id)')
  } else if (idProduct) {
    const deleteProductId = await db.query(
      'DELETE FROM product_data WHERE p_id=$1',
      [idProduct]
    )
    return res.json('Product deleted(id)')
  }
  return res.sendStatus(400).json('Required input')
})

const updateProduct = asyncHandler(async (req, res, next) => {
  const {
    nameProduct,
    idProduct,
    dateProduct,
    countProduct,
    descProduct,
    file,
  } = req.body

  const updateProduct = await db.query(
    'UPDATE  product_data SET ( p_name,   p_id,p_date,p_desc, p_img) VALUES ($1, $2, $3, $4, $5)',
    [nameProduct, idProduct, dateProduct, countProduct, descProduct, file]
  )

  res.json('Updated')
})

module.exports = { createProduct, deleteProduct, updateProduct }

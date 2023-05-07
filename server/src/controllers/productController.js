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
  const allProductList = await db.query('SELECT * FROM product_data')
  return res.json(allProductList.rows)
})

const deleteProduct = asyncHandler(async (req, res, next) => {
  const { nameProduct, idProduct } = req.body
  if (nameProduct) {
    const deleteProductName = await db.query(
      'DELETE FROM product_data WHERE p_name=$1',
      [nameProduct]
    )
    if (!deleteProductName.rowCount) {
      return res.json('Name not Found')
    }
    const allProductList = await db.query('SELECT * FROM product_data')

    return res.json(allProductList.rows)
  } else if (idProduct) {
    const deleteProductId = await db.query(
      'DELETE FROM product_data WHERE p_id=$1',
      [idProduct]
    )
    if (!deleteProductId.rowCount) {
      return res.json('ID not Found')
    }
    const allProductList = await db.query('SELECT * FROM product_data')
    return res.json(allProductList.rows)
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
  const updateSelectedProduct = await db.query(
    'UPDATE product_data  SET p_name=$1, p_id=$2, p_date = $3, p_count=$4, p_desc = $5, p_img = $6 WHERE p_id = $2',
    [nameProduct, idProduct, dateProduct, countProduct, descProduct, file]
  )
  if (!updateSelectedProduct.rowCount) {
    return res.sendStatus(404)
  }
  const allProductList = await db.query('SELECT * FROM product_data')

  return res.json(allProductList.rows)
})

const allList = asyncHandler(async (req, res, next) => {
  const fullList = await db.query('SELECT * FROM product_data')

  return res.json(fullList.rows)
})

const warningList = asyncHandler(async (req, res, next) => {
  const warningList = await db.query(
    'SELECT * FROM product_data WHERE p_date < 7'
  )
  return res.json(warningList.rows)
})

const hotList = asyncHandler(async (req, res, next) => {
  const warningList = await db.query(
    'SELECT * FROM product_data WHERE p_date < 3'
  )
  return res.json(warningList.rows)
})

module.exports = {
  createProduct,
  deleteProduct,
  updateProduct,
  allList,
  warningList,
  hotList,
}

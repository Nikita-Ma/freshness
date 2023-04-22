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
  const updateSelectedProduct = await db.query(
    'UPDATE product_data  SET p_name=$1, p_id=$2, p_date = $3, p_count=$4, p_desc = $5, p_img = $6 WHERE p_id = $2',
    [nameProduct, idProduct, dateProduct, countProduct, descProduct, file]
  )
  if (!updateSelectedProduct.rowCount) {
    return res.sendStatus(404)
  }
  res.json('Success')
})

const searchProduct = asyncHandler(async (req, res, next) => {
  const { name, id } = req.query // TODO: Maybe refactor on req.params

  if (!(name || id)) {
    return res.sendStatus(404)
  }

  if (name) {
    const findProductName = await db.query(
      'SELECT * FROM product_data WHERE p_name = $1',
      [name]
    )
    if (!findProductName.rows[0]) {
      return res.sendStatus(404)
    }
    res.json(findProductName.rows[0])
  }

  if (id) {
    //*
    // * Search Product ID
    // */
    const findProductId = await db.query(
      'SELECT * FROM product_data WHERE p_id = $1',
      [id]
    )
    if (!findProductId.rows[0]) {
      return res.sendStatus(404)
    }
    res.json(findProductId.rows[0])
  }
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
  searchProduct,
  allList,
  warningList,
  hotList,
}

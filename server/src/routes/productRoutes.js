const express = require('express')
const authMiddleware = require('../middleware/authMiddleware')
const {
  createProduct,
  deleteProduct,
  updateProduct,
} = require('../controllers/productController')
const routes = express.Router()
// TODO: Create controllers product
routes.route('/create').post(createProduct)
routes.route('/delete').delete(deleteProduct)
routes.route('/update').put(updateProduct)
routes.route('/search').get(createProduct)

module.exports = routes

const express = require('express')
const authMiddleware = require('../middleware/authMiddleware')
const {
  createProduct,
  deleteProduct,
  updateProduct,
  searchProduct,
  allList,
  warningList,
  hotList,
} = require('../controllers/productController')
const routes = express.Router()
// TODO: Create controllers product
routes.route('/create').post(createProduct)
routes.route('/delete').delete(deleteProduct)
routes.route('/update').put(updateProduct)
routes.route('/search').get(searchProduct)
routes.route('/all').get(allList)
routes.route('/warning').get(warningList)
routes.route('/hot').get(hotList)

module.exports = routes

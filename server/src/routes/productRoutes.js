const express = require('express')
const verifyToken = require('../middleware/authMiddleware')
const {
  createProduct,
  deleteProduct,
  updateProduct,
  allList,
  warningList,
  hotList,
} = require('../controllers/productController')
const routes = express.Router()
// TODO: Create controllers product
routes.route('/create').post(verifyToken).post(createProduct)
routes.route('/delete').delete(deleteProduct)
routes.route('/update').put(updateProduct)
routes.route('/all').get(allList)
routes.route('/warning').get(warningList)
routes.route('/hot').get(hotList)

module.exports = routes

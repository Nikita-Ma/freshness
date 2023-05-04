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
routes.route('/delete').post(verifyToken).delete(deleteProduct)
routes.route('/update').post(verifyToken).put(updateProduct)
routes.route('/all').post(verifyToken).get(allList)
routes.route('/warning').post(verifyToken).get(warningList)
routes.route('/hot').post(verifyToken).get(hotList)

module.exports = routes

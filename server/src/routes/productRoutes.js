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

routes.route('/create').post(verifyToken, createProduct)
routes.route('/delete').delete(verifyToken, deleteProduct)
routes.route('/update').put(verifyToken, updateProduct)
routes.route('/all').get(verifyToken, allList)
routes.route('/warning').get(verifyToken, warningList)
routes.route('/hot').get(verifyToken, hotList)

module.exports = routes

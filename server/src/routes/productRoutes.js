const express = require('express')
const authMiddleware = require('../middleware/authMiddleware')
const createProduct = require('../controllers/productController')
const routes = express.Router()
// TODO: Create controllers product
routes.route('/create').post(createProduct)
routes.route('/delete').delete(createProduct)
routes.route('/update').put(createProduct)
routes.route('/search').get(createProduct)

module.exports = routes

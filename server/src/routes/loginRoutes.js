const express = require('express')
const authMiddleware = require('../middleware/authMiddleware')
const getLogin = require('../controllers/loginController')

const router = express.Router()

const verifyToken = require('../middleware/authMiddleware')
router.route('/').post(getLogin)

module.exports = router

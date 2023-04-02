const express = require('express')
const authMiddleware = require('../middleware/authMiddleware')
const getLogin = require('../controllers/loginController')

const router = express.Router()

router.route('/').get(getLogin)

module.exports = router

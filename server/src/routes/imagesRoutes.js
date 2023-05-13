const express = require('express')
const getImages = require('../controllers/imagesController')
const router = express.Router()

router.route('/').get(getImages)

module.exports = router
